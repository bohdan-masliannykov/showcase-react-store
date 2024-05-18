import { Product } from '@/shared/types/product.type';
import { ProductsState } from '@/shared/types/products-state.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductsState = {
  products: {
    data: [],
    loading: false,
    error: null,
  },
  preview: {
    data: null,
    loading: false,
    error: null,
  },
  categories: {
    data: [],
    loading: false,
    error: null,
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = {
        data: action.payload,
        loading: false,
        error: null,
      };
    },
    setProductsLoading: (state, action: PayloadAction<boolean>) => {
      state.products.loading = action.payload;
    },
    setProductsError: (state, action: PayloadAction<Error | null>) => {
      state.products.error = action.payload;
    },
    setPreview: (state, action: PayloadAction<Product | null>) => {
      state.preview = {
        data: action.payload,
        loading: false,
        error: null,
      };
    },
    setPreviewLoading: (state, action: PayloadAction<boolean>) => {
      state.preview.loading = action.payload;
    },
    setPreviewError: (state, action: PayloadAction<Error | null>) => {
      state.preview.error = action.payload;
    },

    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = {
        data: ['all', ...action.payload],
        loading: false,
        error: null,
      };
    },
    setCategoriesLoading: (state, action: PayloadAction<boolean>) => {
      state.categories.loading = action.payload;
    },
    setCategoriesError: (state, action: PayloadAction<Error | null>) => {
      state.categories.error = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
