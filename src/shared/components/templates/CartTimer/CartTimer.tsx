import { CartState } from "@/shared/types/app-state.type";
import { RootState } from "@/store";
import { CART_DURATION, cartActions } from "@/store/slices/cart.slice";
import { formatTime } from "@/utils/timeformat.util";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const CartTimer = () => {
    const dispatch = useDispatch();
    const [timeLeft, setTimeLeft] = useState(0);

    const state: CartState = useSelector(
        (state: RootState) => state.cart
    );

    const clearCart = () => {
        dispatch(cartActions.clearCart());
    }

    useEffect(() => {
        if (!state.timestamp) {
            setTimeLeft(0);
            clearCart();
            return;
        }

        const endtime = state.timestamp + (CART_DURATION * 60 * 1000);
        const start = Date.now();
        const msLeft = endtime - start;
        setTimeLeft(msLeft);

        const interval = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1000) {
                    clearInterval(interval);
                    clearCart();
                    return 0;
                }
                return prev - 1000;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [state.timestamp])

    return (
        <div className='mr-4 font-bold text-indigo-900'>
            {timeLeft > 0 ? formatTime(timeLeft) : ''}
        </div>
    );
}