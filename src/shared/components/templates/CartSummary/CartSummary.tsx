import { CartState } from "@/shared/types/app-state.type";
import { Product } from "@/shared/types/product.type";
import { RootState } from "@/store";
import { DELIVERY_CHARGE } from "@/store/slices/cart.slice";
import { formatCurrency } from "@/utils/currency.util";
import { useSelector } from "react-redux";

export const CartSummary = () => {
    const state: CartState = useSelector(
        (state: RootState) => state.cart
    );

    const summary = state.items.reduce((acc: any, item: Product) => {
        acc.total = acc.total + (item.price * item.quantity!);
        acc.totalDelivery = acc.totalDelivery + (DELIVERY_CHARGE * item.quantity!);
        return acc;
    }, { total: 0, totalDelivery: 0 });

    const total = summary.total + summary.totalDelivery;

    return (
        <>
            <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
                <div className="flex items-center justify-between w-full mb-6">
                    <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900">{formatCurrency(summary.total)}</h6>
                </div>
                <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
                    <p className="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
                    <h6 className="font-semibold text-xl leading-8 text-gray-900">{formatCurrency(summary.totalDelivery)}</h6>
                </div>
                <div className="flex items-center justify-between w-full py-6">
                    <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
                    <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">{formatCurrency((total))}</h6>
                </div>
            </div>
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                <button
                    className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
                    Continue to Payment
                    <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
                        fill="none">
                        <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    );
}