
import Seo from "../components/Seo";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const API_KEY = "ce98982bc3be27a2d78602933300b89d";

export default function Home({results}) {
    const router = useRouter();
    const onClick = (id, name) => {
        router.push(`/movies/${name}/${id}`);

    };
    return (
        <div className="container">
            <Seo  title={"Home"} />
            {results?.map( (movie) => (
                        <div className="movie" onClick={() => onClick(movie.id, movie.original_title) } key={movie.id} >
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                            <h4>{movie.title}</h4>
                        </div>
                    )
                )
            }
            <style jsx>{`
                    .container {
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      padding: 20px;
                      gap: 20px;
                    }
                    .movie img {
                      max-width: 100%;
                      border-radius: 12px;
                      transition: transform 0.2s ease-in-out;
                      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
                    }
                    .movie:hover img {
                      transform: scale(1.05) translateY(-10px);
                    }
                    .container h4 {
                      font-size: 18px;
                      text-align: center;
                      text-decoration: none;
                    }
                    .container a {
                      text-decoration: none !important;
                    }
                  `}
            </style>

        </div>


    )


}
// 백엔드 server 단에서만 보여짐
export async function getServerSideProps() {
    const { results } = await (await fetch('http://localhost:3000/api/movies')).json();
    return{
        props : {
            results,
        }
    }


}




