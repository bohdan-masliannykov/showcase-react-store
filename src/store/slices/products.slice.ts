import { ProductsState } from '@/shared/types/app-state.type';
import { createSlice } from '@reduxjs/toolkit';
import {
  asyncGetProducByIdThunk,
  asyncGetProductsCategoriesThunk,
  asyncGetProductsThunk,
} from '../actions/products.actions';
import { DefaltCategory } from '@/shared/enums/default-category.enum';

export const initialState: ProductsState = {
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
    resetProducts: (state) => {
      state.products = { data: [], loading: false, error: null };
    },
    resetPreview: (state) => {
      state.preview = { data: null, loading: false, error: null };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(asyncGetProductsThunk.pending, (state) => {
        state.products = { data: [], loading: true, error: null };
      })
      .addCase(asyncGetProductsThunk.rejected, (state, action) => {
        state.products = { data: [], loading: false, error: action.error };
      })
      .addCase(asyncGetProductsThunk.fulfilled, (state, action) => {
        state.products = {
          data: action.payload,
          loading: false,
          error: null,
        };
      });

    builder
      .addCase(asyncGetProductsCategoriesThunk.pending, (state) => {
        state.categories = { data: [], loading: true, error: null };
      })
      .addCase(asyncGetProductsCategoriesThunk.rejected, (state, action) => {
        state.categories = { data: [], loading: false, error: action.error };
      })
      .addCase(asyncGetProductsCategoriesThunk.fulfilled, (state, action) => {
        state.categories = {
          data: [DefaltCategory.All, ...action.payload],
          loading: false,
          error: null,
        };
      });

    builder
      .addCase(asyncGetProducByIdThunk.pending, (state) => {
        state.preview = { data: null, loading: true, error: null };
      })
      .addCase(asyncGetProducByIdThunk.rejected, (state, action) => {
        state.preview = { data: null, loading: false, error: action.error };
      })
      .addCase(asyncGetProducByIdThunk.fulfilled, (state, action) => {
        state.preview = {
          data: {
            ...action.payload,
          },
          loading: false,
          error: null,
        };
      });
  },
});

export const productsActions = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
