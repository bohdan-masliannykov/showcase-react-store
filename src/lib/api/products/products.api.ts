import { fetchData } from '@/lib/fetch.api';
import { Product } from '@/shared/types/product.type';

const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async (signal?: AbortSignal): Promise<Product[]> => {
  return fetchData<Product[]>(`${API_URL}/products`, signal);
};

export const getProductById = async (id: string): Promise<Product> => {
  return fetchData<Product>(`${API_URL}/products/${id}`);
};

export const getProductsCategories = async (): Promise<string[]> => {
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

export const ProductsAPI = {
  getProducts,
  getProductById,
  getProductsCategories,
  getProductsByCategory,
};
