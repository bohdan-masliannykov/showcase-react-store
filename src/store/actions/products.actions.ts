import { Product } from '@/shared/types/product.type';
import { productsActions } from '../slices/products.slice';
import { fetchData } from '@/lib/fetch.api';

const API_URL = import.meta.env.VITE_API_URL;

// #region Products API
const getProducts = async (signal?: AbortSignal): Promise<Product[]> => {
  return fetchData<Product[]>(`${API_URL}/products`, signal);
};

const getProductById = async (id: string): Promise<Product> => {
  return fetchData<Product>(`${API_URL}/products/${id}`);
};

const getProductsCategories = async (): Promise<string[]> => {
  return fetchData<string[]>(`${API_URL}/products/categories`);
};

const getProductsByCategory = async (
  category: string,
  signal?: AbortSignal
): Promise<string[]> => {
  return fetchData<string[]>(
    `${API_URL}/products/category/${category}`,
    signal
  );
};

// #endregion

// #region Thunks
let abortController: AbortController | null = null;

export const asyncGetProductsThunk = (category?: string) => {
  return async (dispatch) => {
    category = category === 'all' ? undefined : category; //ignore 'all' category
    abortController?.abort();

    abortController = new AbortController();
    const signal = abortController.signal;

    try {
      dispatch(productsActions.setProductsLoading(true));
      const response = category
        ? await getProductsByCategory(category, signal)
        : await getProducts(signal);

      if (signal.aborted) {
        return;
      }

      dispatch(productsActions.setProducts(response));
      dispatch(productsActions.setProductsLoading(false));
    } catch (error: Error) {
      console.log('Error: ', error.message);
      //TODO show common UI error
    }
  };
};

export const asyncGetProductsCategoriesThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(productsActions.setCategoriesLoading(true));
      const response = await getProductsCategories();
      dispatch(productsActions.setCategories(response));
      dispatch(productsActions.setCategoriesLoading(false));
    } catch (error: Error) {
      console.log('Error: ', error.message);
      //TODO show common UI error
    }
  };
};

export const asyncGetProducByIdThunk = (id: string) => {
  return async (dispatch) => {
    try {
      dispatch(productsActions.setPreviewLoading(true));
      const response = await getProductById(id);
      dispatch(productsActions.setPreview(response));
      dispatch(productsActions.setPreviewLoading(false));
    } catch (error: Error) {
      console.log('Error: ', error.message);
      //TODO show common UI error
    }
  };
};
// #endregion
