
#  Next.js 로 영화 모바일 웹 서비스 만들기

### 1. 프로젝트 소개
next.js 를 사용해서 만든 간단 영화앱 (header SEO 까지 알뜰하게 적용한...)
![](https://velog.velcdn.com/images/dpwns108/post/85837ccf-fd0a-469c-8c77-cad164d7ae8f/image.png)
![](https://velog.velcdn.com/images/dpwns108/post/a14dfa00-9f54-4b26-ba34-c732c2ece69a/image.png)


### 2. 배운점

#### 1. page 폴더 구조 만으로 라우팅이 가능하다.


예를 들어 movies 폴더 안에 [...params].js 파일을 만들면
movies/1, movies/2, movies/3 등의 페이지를 만들 수 있다.
이것이 Dynamic 라우팅 !_!

#### 2. getServerSideProps
getServerSideProps 는 서버에서만 실행되는 함수이다.
서버에서 실행되기 때문에 서버에서만 접근 가능한 데이터를 가져올 수 있다.

````javascript
//nextConfig.js 
// /api/movies" 로 접근하면 "https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}" 로 접근하게 된다.
async rewrites() {
    return [
        {
            source : "/api/movies",
            destination : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,

        }
    ]

},

//index.js
export async function getServerSideProps() {
    const { results } = await (await fetch('http://localhost:3000/api/movies')).json();
    return{
        props : {
            results,
        }
    }


}
````

#### 3. pre-rendering
pre-rendering 은 미리 페이지를 만들어 놓는 것이다.
next.js 에서는 미리 초기상태의 html 을 렌더링 해놓는다. 





## Next.JS 너는 누구냐!

해당 프로젝트에서는 next.js 가 무엇인지?
왜 사용해야 하는지 
어떻게 사용되는 것인지를 공부해 보는 프로젝트 이다!

### 1. Next.js 가 뭐고 왜쓰는데?

Next.js는 리액트를 기반으로 한 프레임워크 이다. 
리엑트로 개발된 프로젝트는 CSR 방식으로 동작을 하게 되는데,
CSR 방식은 2가지의 문제점이 있다. 

1. 구글 검색 노출이 어렵다
2. 첫 페이지 로딩속도가 느리다

문제는 이 두가지가 사이트 수입성에 아주 악영향을 끼친다
사이트를 왜 만드는가? 돈 벌려고 만드는 거 아닌가
그런데 React로 만들면 돈이 줄줄 세어 나간다

하지만 Sever-Side Rendering은 html웹 페이지를 서버에서
미리 다 만들어서 보내주는 개념이기 때문에 유저에게 자바스크립트를
많이 보낼 필요가 없어서 조금 더 가볍고 구글 검색 노출도 잘 되는 편이다

심지어 Nextjs에선 SSR을 하고 싶다? 그러면 그것도 선택적으로 가능하기 때문에 안 쓸 이유가 없다


### 2. 라이브러리 VS 프레임워크

라이브러리와 프레임워크의 주요 차이점은 "Inversion of Control"(통제의 역전)

프레임워크는 내가 코드를 적절하게 적기만 한다면 프레임워크가 알아서 동작을 해준다. (프레임 워크의 규칙을 따라야함.)
라이브러리는 내가 필요할때 불러와서 필요한 부분에 적용시킨다. 

라이브러리
사용자가 파일 이름이나 구조 등을 정하고, 모든 결정을 내림
프레임워크
파일 이름이나 구조 등을 정해진 규칙에 따라 만들고 따름

### 3. Next.js 의 장점

- 파일과 폴더만 만들면 html 페이지를 생성해 줄 수 있다. 
- 서버 기능을 만들듯이 DB 연결할 수 있고, API를 만들 수 있다. 라이브러리를 사용하면 회원 인증도 쉽다. 
- CSR 도 자유롭게 할 수 있다. 
- 서버 데이터 캐싱도 쉽다.
- 폰트/이미지 최적화도 가능하다

### 4. Next.js 의 단점

- 폴더 기반 라우팅을 사용하기 때문에 예약 파일이 많아지고 파일이 많아지면 관리가 힘들다.
- 라우팅 방식이 CSR 방식보다 느리다.
- 클라이언트 컴포넌트와 서버 컴포넌트를 구분해서 짜야하는 귀찮음이 있다. 
- 


### 5. React vs Next.js

#### SSR 및 정적 사이트 생성
React
클라이언트 단에서 실행되며 초기 로딩 시에 HTML 과 JavaScript 를 받아와 동적으로 렌더링 한다. 
Next.js 
SSR 과 정적 사이트 생성을 지원하며, 초기 로드 시에 서버에서 HTML 을 생성한 후 완성된 HTML 클라이언트에 전달한다. 

#### 라우팅
React
라우팅을 위해서 React Router 등 별도의 라이브러리를 사용해야 한다. 
Next.js
라우팅을 위한 별도의 라이브러리가 필요 없고, 페이지 구조를 폴더와 파일로 표현할 수 있다. 

#### 데이터 미리 가져오기
React
데이터를 가져오기 위해서는 별도의 라이브러리를 사용해야 한다.
Next.js
getInitialProps 를 사용하여 데이터를 가져올 수 있다.




