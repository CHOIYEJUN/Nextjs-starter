import NavigationBar from "@/components/NavigationBar";

export default function App({ Component, pageProps }) {
    return(
        <>
            <NavigationBar />
            <Component {...pageProps} />

        </>
        )


}
