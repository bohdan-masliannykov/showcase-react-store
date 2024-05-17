import { router } from "@/routes/router";
import { store } from "@/store";
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';

export const AppProvider = (): React.ReactNode | null => {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
