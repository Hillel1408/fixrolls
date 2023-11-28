import { Header, Footer, Modal404 } from "components";
import { useAppSelector } from "hook";

const Layout = ({ children }: { children: any }) => {
    const activeModal = useAppSelector((state) => state.modals.activeModal);

    return (
        <>
            <Header />
            <main className="bg-[#F2F2F2]">{children}</main>
            <Footer />

            {activeModal === "404" && <Modal404 />}
        </>
    );
};

export default Layout;
