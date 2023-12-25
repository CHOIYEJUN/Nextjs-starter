import {useRouter} from "next/router";
import Seo from "../../components/Seo";


export default function Details({params}) {

    const router = useRouter();
    // 이렇게 받아오면 검색엔진은 params 를 못읽는다.
    const [title, id] = params || [];
    console.log(params);
    return (
        <div>
            <Seo title={title}></Seo>
            <h6>{title}</h6>

        </div>
    );
}

export function getServerSideProps({params:{params}}) {
    return {
        props : {
            params,
        },
    };
}
