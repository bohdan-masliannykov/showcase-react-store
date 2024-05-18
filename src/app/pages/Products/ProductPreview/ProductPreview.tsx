
import { Product } from '@/shared/types/product.type';
import { ProductsState } from '@/shared/types/products-state.type';
import { RootState } from '@/store';
import { asyncGetProducByIdThunk } from '@/store/actions/products.actions';
import { formatCurrency } from '@/utils/currency.util';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductMock: React.FC = () => {
    return (
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
            </div>
            <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}

const ProductView: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div role="status" className="space-y-8 md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <img className='h-48' style={{ width: '300px', objectFit: 'contain' }} src={product.image} alt={product.title} />
            </div>
            <div className="w-full">
                <div className=" mb-2.5">
                    <h1 className='text-4xl font-extrabold dark:text-white mb-4'>{product.title}</h1>
                </div>

                <div className=" mb-2.5">
                    <p className='mb-4 text-lg font-normal text-gray-500 dark:text-gray-400'>{product.description}</p>
                </div>

                <div className="max-w-[360px]">

                    <p>{formatCurrency(product.price)}</p>
                    <p>{product.category}</p>
                </div>
            </div>
        </div>
    )
}


const ProductPreview: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const state: ProductsState = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const { data: product, loading } = state.preview;

    useEffect(() => {
        dispatch(asyncGetProducByIdThunk(id));
    }, []);

    return (
        <div className="product-preview">
            <div className="container py-12">
                {!loading && product ? <ProductView product={product!} /> : <ProductMock />}
            </div>
        </div>
    );
};

export default ProductPreview;