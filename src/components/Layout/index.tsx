import { Header, Footer } from "components";

const Layout = ({ children }: { children: any }) => {
    return (
        <div className="w-full">
            <Header />
            <main className="bg-[#F2F2F2]">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
