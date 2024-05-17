import { Product } from '@/shared/types/product.type';
import { productsActions } from '../slices/products.slice';
import { fetchData } from '@/lib/fetch.api';

// #region Products API
const getProducts = async (): Promise<Product[]> => {
  return fetchData<Product[]>(`${import.meta.env.VITE_API_URL}/products`);
};

const getProductById = async (id: string): Promise<Product> => {
  return fetchData<Product>(`${import.meta.env.VITE_API_URL}/products/${id}`);
};
// #endregion

export const asyncGetProductsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(productsActions.setProductsLoading(true));
      const response = await getProducts();
      dispatch(productsActions.setProducts(response));
      dispatch(productsActions.setProductsLoading(false));
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
