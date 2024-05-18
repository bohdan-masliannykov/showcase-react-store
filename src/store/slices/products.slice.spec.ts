import {
  //   asyncGetProductsCategoriesThunk,
  asyncGetProductsThunk,
} from '@/store/actions/products.actions';
import { productsActions, productsReducer } from './products.slice';

const initialState = {
  products: {
    data: [],
    loading: false,
    error: null,
  },
  preview: {
    data: null as any,
    loading: false,
    error: null,
  },
  categories: {
    data: [],
    loading: false,
    error: null,
  },
};

describe('Products Slice', () => {
  it('should initialize state', () => {
    const state = productsReducer(undefined, { type: '' });
    expect(state).toEqual(initialState);
  });

  it('should reset products', () => {
    initialState.products = {
      data: [{ id: '1', name: 'Hat', price: 2.99 }] as any,
      loading: true,
      error: null,
    };

    const state = productsReducer(
      initialState,
      productsActions.resetProducts()
    );
    expect(state.products).toEqual({ data: [], loading: false, error: null });
  });

  it('should reset preview', () => {
    initialState.preview = {
      data: { id: '1', name: 'Hat', price: 2.99 } as any,
      loading: true,
      error: null,
    };

    const state = productsReducer(initialState, productsActions.resetPreview());
    expect(state.preview).toEqual({ data: null, loading: false, error: null });
  });

  it('should set products loading state', () => {
    const state = productsReducer(
      initialState,
      asyncGetProductsThunk.pending()
    );
    expect(state.products).toEqual({ data: [], loading: true, error: null });
  });

  it('should set products successfully without categories', () => {
    const state = productsReducer(
      initialState,
      asyncGetProductsThunk.fulfilled([{ id: '1', name: 'Hat', price: 2.99 }])
    );
    expect(state.products).toEqual({
      data: [{ id: '1', name: 'Hat', price: 2.99 }],
      loading: false,
      error: null,
    });
  });

  it('should set products with category jewelery', () => {
    const state = productsReducer(
      initialState,
      asyncGetProductsThunk.fulfilled(
        [{ id: '1', name: 'Hat', price: 2.99, category: 'jewelery' }],
        'jewelery'
      )
    );
    expect(state.products).toEqual({
      data: [{ id: '1', name: 'Hat', price: 2.99, category: 'jewelery' }],
      loading: false,
      error: null,
    });
  });
});
