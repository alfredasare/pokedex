import Head from "next/head";

const Layout = ({children, title}) => {
    return (
        <div className="bg-gray-50">
            <Head>
                <title>{title}</title>
            </Head>

            <main className="container mx-auto max-w-7xl min-h-screen">
                {children}
            </main>
        </div>
    );
};

export default Layout;