import { Product } from "@/shared/types/product.type"
import { formatCurrency } from "@/utils/currency.util"

export const ProductView: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div role="status" className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <img className='h-48' style={{ width: '300px', objectFit: 'contain' }} src={product.image} alt={product.title} />
            </div>
            <div className="w-full">
                <div className=" mb-2.5">
                    <h1 className='text-4xl font-extrabold dark:text-white mb-4'>{product.title}</h1>
                </div>
                <span className="capitalize inline-flex items-center justify-center px-2 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    {product!.category}
                </span>
                <div className=" mb-2.5">
                    <p className='mb-4 text-lg font-normal text-gray-500 dark:text-gray-400'>{product.description}</p>
                </div>
                <div className="max-w-[360px]">
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {formatCurrency(product!.price)}
                    </div>
                </div>

                <button type="button" className="mt-8 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Buy now
                </button>
            </div>
        </div>
    )
}
