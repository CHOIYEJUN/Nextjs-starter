import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavigationBar.module.css";

export default function NavigationBar() {
    const router = useRouter();

    return(
        <nav>
            {/*a 태그 사용하면 전체 페이지를 새로고침 하게 되서 사용하지 않음*/}

           {/* <Link className={router.pathname === "/" ? styles.active : ""} href={'/'}>
                    Home
            </Link>
            <Link className={router.pathname === "/about" ? styles.active : ""} href={'/about'}>
                    About
            </Link>*/}

            <Link className={router.pathname === "/" ? "active" : ""} href={'/'}>
                Home
            </Link>
            <Link className={router.pathname === "/about" ? "active" : ""} href={'/about'}>
                About
            </Link>

            <style jsx global >{`

              nav {
                display : flex;
                justify-content : space-between;
                align-items : center;
                padding : 0 1rem;
                height : 5rem;
                background-color : #fff;
                border-bottom : 1px solid #e2e2e2;
                width: 20%;

              }

              .active {
                color : #337ab7;
              }
              
            `}</style>
        </nav>
    )
}
