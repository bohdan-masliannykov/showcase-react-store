import { Product } from '@/shared/types/product.type';
import React from 'react';
import styles from './ProductCard.module.scss';
import { formatCurrency } from '@/utils/currency.util';
import { Link } from 'react-router-dom';

type ProductCardType = React.FC<ProductEntityProps> & {
    Mock: React.FC<ProductEntityProps>;
};

interface ProductEntityProps {
    product?: Product;
}

const ProductCard: ProductCardType = ({ product }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/products/${product!.id}`}>
                <img className={`${styles.product__image} rounded-t-lg`} src={product!.image} alt={product!.title} />
            </Link>
            <div className="p-5">
                <Link to={`/products/${product!.id}`}>
                    <h5 className={`${styles.product__title} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>{product!.title}</h5>
                </Link>
                <p className={`${styles.product__description} mb-3 font-normal text-gray-700 dark:text-gray-400`}>{product!.description}</p>

                <div className="flex justify-between">
                    <p>{formatCurrency(product!.price)}</p>
                    <p>{product!.category}</p>
                </div>
            </div>
        </div>
    );
};

const ProductCardMock: React.FC<ProductEntityProps> = () => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
            </div>
            <div className="p-5">
                <h5 className={`${styles.product__title} mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                </h5>
                <div className={`${styles.product__description} mb-3 font-normal text-gray-700 dark:text-gray-400`}>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-between">
                    <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-16"></div>
                </div>
            </div>
        </div>
    );
};


ProductCard.Mock = ProductCardMock;

export default ProductCard;