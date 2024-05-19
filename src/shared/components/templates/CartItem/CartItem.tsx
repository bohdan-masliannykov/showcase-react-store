import { Product } from "@/shared/types/product.type";
import { DELIVERY_CHARGE } from "@/store/slices/cart.slice";
import { formatCurrency } from "@/utils/currency.util";
import { useState } from "react";

type CartItemProps = {
    item: Product;
    onRemove: (id: number) => void;
    onUpdateQuantity: (id: number, quantity: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
    const [quantity, setQuantity] = useState(item!.quantity || 0);

    const handleQuantityChange = (q: number) => {
        const newQuantity = quantity + q;
        if (newQuantity < 1) return;
        setQuantity(newQuantity);
        onUpdateQuantity(item.id, newQuantity);
    };

    const handleRemove = () => {
        onRemove(item.id);
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
            <div
                className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box"><img src={item.image} alt="perfume bottle image" className="xl:w-[140px]" /></div>
                <div className="pro-data w-full max-w-sm ">
                    <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                        {item.title}
                    </h5>
                    <p className="capitalize font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                        {item.category}
                    </p>
                    <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                        {formatCurrency(item.price)}
                    </h6>
                </div>
            </div>
            <div
                className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <h6 className="font-manrope font-bold text-2xl leading-9 text-black w-full max-w-[176px] text-center">
                    {formatCurrency(DELIVERY_CHARGE)}
                    <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                        (Delivery Charge)
                    </span>
                </h6>
                <div className="flex items-center">

                    <div className="flex items-center w-full mx-auto justify-center">
                        <button
                            disabled={quantity === 1}
                            onClick={() => handleQuantityChange(-1)}
                            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                                <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                                <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                            </svg>
                        </button>
                        <input type="text"
                            value={quantity}
                            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                            placeholder="1" />
                        <button
                            onClick={() => handleQuantityChange(1)}
                            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                            <svg className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                                xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                                    strokeLinecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                                <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                                    strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="ml-2">
                        <button onClick={handleRemove} type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            Remove
                        </button>
                    </div>
                </div>
                <h6
                    className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                    {formatCurrency(item!.price * item.quantity!)}
                </h6>
            </div>
        </div>
    )
}