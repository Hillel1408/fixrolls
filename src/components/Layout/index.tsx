import { Header, Footer } from "components";

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <Header />
            <main className="bg-[#F2F2F2]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
