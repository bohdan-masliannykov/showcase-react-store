import { CartItem } from "@/shared/components/templates/CartItem/CartItem";
import { CartSummary } from "@/shared/components/templates/CartSummary/CartSummary";
import { CartState } from "@/shared/types/app-state.type";
import { RootState } from "@/store";
import { cartActions } from "@/store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";

export const CartPage = () => {
    const dispatch = useDispatch();
    const state: CartState = useSelector(
        (state: RootState) => state.cart
    );

    const updateCartQuantity = (itemId: number, quantity: number) => {
        dispatch(cartActions.updateQuantity({ itemId, quantity }));
    }

    const removeProductFromCart = (itemId: number) => {
        dispatch(cartActions.removeItem(itemId!));
    }

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart
                </h2>
                <div className="hidden lg:grid grid-cols-2 py-6">
                    <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
                    <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                        <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
                        <span className="w-full max-w-[260px] text-center">Quantity</span>
                        <span className="w-full max-w-[200px] text-center">Total</span>
                    </p>
                </div>
                {state.items.map((item) => (<CartItem key={item.id} item={item} onUpdateQuantity={updateCartQuantity} onRemove={removeProductFromCart} />))}
                <CartSummary />
            </div>
        </section>
    )
}