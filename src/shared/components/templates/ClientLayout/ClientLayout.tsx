import { Outlet } from "react-router-dom";

export const ClientLayout: React.FC = () => {
    console.log('action from client layout');
    return (<Outlet />);
}