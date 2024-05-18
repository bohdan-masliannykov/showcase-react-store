import { Loader } from "../../atoms/Loader/Loader";

type LoadingWrapperProps = {
    loading: boolean;
}

export const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children, loading }) => {
    return <>{loading ? <Loader /> : (<>{children}</>)}</>;
};