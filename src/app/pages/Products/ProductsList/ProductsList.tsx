import { LoadingWrapper } from '@/shared/components/molecules/LoadingWrapper/LoadingWrapper';
import { CategoriesList } from '@/shared/components/templates/CategoriesList/CategoriesList';
import ProductCard from '@/shared/components/templates/ProductCard/ProductCard';
import { Product } from '@/shared/types/product.type';
import { ProductsState } from '@/shared/types/products-state.type';
import { RootState } from '@/store';
import { asyncGetProductsCategoriesThunk, asyncGetProductsThunk } from '@/store/actions/products.actions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from "react-router-dom";

const ProductsList: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');//get category from url

    const state: ProductsState = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const { data: products, loading: isLoadingProducts } = state.products;
    const { data: categories, loading: isLoadingCategories } = state.categories;

    useEffect(() => {
        dispatch(asyncGetProductsCategoriesThunk());
    }, []);

    useEffect(() => {
        if (categories?.length) {
            const findCategory = categories.findIndex((c: string) => c === category);
            if (findCategory === -1) {
                onSelectCategory('all');
                return;
            }
            console.log('here')
            dispatch(asyncGetProductsThunk(category));
        }
    }, [category, categories]);

    const onSelectCategory = (category: string) => {
        navigate({
            pathname: '/products',
            search: `?category=${category}`
        })
    }

    return (
        <div className='container'>
            <LoadingWrapper loading={isLoadingCategories}>
                <div className='flex justify-center pt-12'>
                    <CategoriesList selectedCategory={category!} list={categories!} onSelectCategory={onSelectCategory}></CategoriesList>
                </div>
            </LoadingWrapper>
            <div className='min-h-96 grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 py-12 justify-items-center sm:justify-items-start'>
                {isLoadingProducts ? Array(4).fill(0).map((i: number, index) => <ProductCard.Mock key={index} />) : products!.map((product: Product) => (<ProductCard key={product.id} product={product!} />))}
            </div>
        </div>
    );
};

export default ProductsList;