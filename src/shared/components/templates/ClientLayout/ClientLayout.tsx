import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const ClientLayout: React.FC = () => {
    return (
        <>
            <Header />
            <div style={{ minHeight: 'calc(100vh - 250px)' }}>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}