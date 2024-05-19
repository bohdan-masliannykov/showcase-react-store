import { DefaltCategory } from '@/shared/enums/default-category.enum';
import { ProductsState } from '@/shared/types/app-state.type';
import { RootState } from '@/store';
import {
  asyncGetProductsCategoriesThunk,
  asyncGetProductsThunk,
} from '@/store/actions/products.actions';
import { productsActions } from '@/store/slices/products.slice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useProductListHook = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category'); //get category from url

  const state: ProductsState = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch();

  const { data: products, loading: isLoadingProducts } = state.products;
  const { data: categories, loading: isLoadingCategories } = state.categories;

  useEffect(() => {
    dispatch(asyncGetProductsCategoriesThunk());
    return () => {
      // clean store to refetch only fresh data
      dispatch(productsActions.resetProducts());
    };
  }, []);

  useEffect(() => {
    const getProductsByCategoryParamChange = () => {
      if (categories?.length) {
        const findCategory = categories.findIndex(
          (c: string) => c === category
        );
        if (findCategory === -1) {
          onSelectCategory(DefaltCategory.All);
          return;
        }
        dispatch(asyncGetProductsThunk(category));
      }
    };

    getProductsByCategoryParamChange();
  }, [category, categories]);

  const onSelectCategory = (category: string) => {
    navigate({
      pathname: '/products',
      search: `?category=${category}`,
    });
  };

  return {
    isLoadingProducts,
    isLoadingCategories,
    products,
    categories,
    category,
    onSelectCategory,
  };
};
