import { LoadingWrapper } from '@/shared/components/molecules/LoadingWrapper/LoadingWrapper';
import { CategoriesList } from '@/shared/components/templates/CategoriesList/CategoriesList';
import ProductCard from '@/shared/components/templates/ProductCard/ProductCard';
import { Product } from '@/shared/types/product.type';
import { ProductsState } from '@/shared/types/products-state.type';
import { RootState } from '@/store';
import { asyncGetProductsCategoriesThunk, asyncGetProductsThunk } from '@/store/actions/products.actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductsList: React.FC = () => {
    const state: ProductsState = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const { data: products, loading: isLoadingProducts } = state.products;
    const { data: categories, loading: isLoadingCategories } = state.categories;


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
                    <CategoriesList selectedCategory={'all'} list={categories!} onSelectCategory={onSelectCategory}></CategoriesList>
                </div>
            </LoadingWrapper>

            <LoadingWrapper loading={isLoadingProducts}>
                <ul className='flex flex-wrap -mx-4'>
                    {products!.map((product: Product) => (
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