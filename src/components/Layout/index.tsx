import { Header, Footer } from "components";

const Layout = ({ children }: { children: any }) => {
    return (
        <>
            <Header />
            <main className="bg-[#F2F2F2] xl:min-w-[1365px] sm:min-w-[auto]">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
