import NavigationBar from "@/components/NavigationBar";

export default function Layout({children}) {
    return (
        <>
            <NavigationBar />
            <div className="container">
                <h1>{children}</h1>
            </div>
        </>
    );
}
