import { Header, Footer, Modal404 } from "components";

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <Header />
            <main className="bg-[#F2F2F2]">{children}</main>
            <Footer />

            <Modal404 />
        </>
    );
};

export default Layout;
