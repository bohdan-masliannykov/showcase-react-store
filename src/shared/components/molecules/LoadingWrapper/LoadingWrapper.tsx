import { ReactNode } from "react";
import { Loader } from "../../atoms/Loader/Loader";

type LoadingWrapperProps = {
    loading: boolean;
    children: ReactNode;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children, loading }) => {
    return <>{loading ? <Loader /> : (<>{children}</>)}</>;
};