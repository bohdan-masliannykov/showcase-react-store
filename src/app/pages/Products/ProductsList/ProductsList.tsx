import { Loader } from '@/shared/components/atoms/Loader/Loader';
import { LoadingWrapper } from '@/shared/components/molecules/LoadingWrapper/LoadingWrapper';
import { CategoriesList } from '@/shared/components/templates/CategoriesList/CategoriesList';
import ProductCard from '@/shared/components/templates/ProductCard/ProductCard';
import { Product } from '@/shared/types/product.type';
import { ProductsState } from '@/shared/types/products-state.type';
import { asyncGetProductsCategoriesThunk, asyncGetProductsThunk } from '@/store/actions/products.actions';
import { RootState } from '@reduxjs/toolkit/query';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductsList: React.FC = () => {
    const state: ProductsState = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    const { data: products, loading: isLoadingProducts, error } = state.products.products;
    const { data: categories, loading: isLoadingCategories } = state.products.categories;

    useEffect(() => {
        dispatch(asyncGetProductsThunk());
        dispatch(asyncGetProductsCategoriesThunk());
    }, []);

    const onSelectCategory = (category: string) => {
        console.log('category: ', category);
        dispatch(asyncGetProductsThunk(category));
    }

    return (
        <div className='container'>
            <LoadingWrapper loading={isLoadingCategories}>
                <div className='flex justify-center py-12'>
                    <CategoriesList selectedCategory={'all'} list={categories} onSelectCategory={onSelectCategory}></CategoriesList>
                </div>
            </LoadingWrapper>

            <LoadingWrapper loading={isLoadingProducts}>
                <ul className='flex flex-wrap -mx-4'>
                    {products.map((product: Product) => (
                        <li className="sm:w-1/2 md:w-1/3 xl:w-1/4 px-4" key={product.id}>
                            <ProductCard product={product} />
                        </li>
                    ))}
                </ul>
            </LoadingWrapper>
        </div>
    );
};

export default ProductsList;