import NavigationBar from "@/components/NavigationBar";
import Head from "next/head";

export default function Seo({title}) {
    return (
        <Head>
            <title>
                {title} | NextMove
            </title>
        </Head>
    )
}
