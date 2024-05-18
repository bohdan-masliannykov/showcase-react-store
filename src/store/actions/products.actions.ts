import { Product } from '@/shared/types/product.type';
import { fetchData } from '@/lib/fetch.api';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
): Promise<Product[]> => {
  return fetchData<Product[]>(
    `${API_URL}/products/category/${category}`,
    signal
  );
};

// #endregion

// #region Thunks
let abortController: AbortController | null = null;
export const asyncGetProductsThunk: any = createAsyncThunk(
  'products/getProducts',
  async (category?: string) => {
    category = category === 'all' ? undefined : category; //ignore 'all' category
    abortController?.abort();

    abortController = new AbortController();
    const signal = abortController.signal;

    const response = category
      ? await getProductsByCategory(category, signal)
      : await getProducts(signal);

    return response;
  }
);

export const asyncGetProductsCategoriesThunk: any = createAsyncThunk(
  'products/getCategories',
  async () => {
    const response = await getProductsCategories();
    return response;
  }
);

export const asyncGetProducByIdThunk: any = createAsyncThunk(
  'products/getProductById',
  async (id: string) => {
    const response = await getProductById(id);
    return response;
  }
);
// #endregion
