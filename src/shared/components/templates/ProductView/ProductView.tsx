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
            </div>
        </div>
    )
}
