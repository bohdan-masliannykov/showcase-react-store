import { createAsyncThunk } from '@reduxjs/toolkit';
import { DefaltCategory } from '@/shared/enums/default-category.enum';
import { ProductsAPI } from '@/lib/api/products/products.api';

// #endregion

// #region Thunks
let abortController: AbortController | null = null;
export const asyncGetProductsThunk: any = createAsyncThunk(
  'products/getProducts',
  async (category?: string) => {
    category = category === DefaltCategory.All ? undefined : category; //ignore 'all' category
    abortController?.abort();

    abortController = new AbortController();
    const signal = abortController.signal;

    const response = category
      ? await ProductsAPI.getProductsByCategory(category, signal)
      : await ProductsAPI.getProducts(signal);

    return response;
  }
);

export const asyncGetProductsCategoriesThunk: any = createAsyncThunk(
  'products/getCategories',
  async () => {
    const response = await ProductsAPI.getProductsCategories();
    return response;
  }
);

export const asyncGetProducByIdThunk: any = createAsyncThunk(
  'products/getProductById',
  async (id: string) => {
    const response = await ProductsAPI.getProductById(id);
    return response;
  }
);
// #endregion
