import { describe, it, expect, vi } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useProductListHook } from './userProductList.hook';
import { act } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { BrowserRouter } from 'react-router-dom';
import { asyncGetProductsCategoriesThunk, asyncGetProductsThunk } from '@/store/actions/products.actions';
import { ProductsAPI } from '@/lib/api/products/products.api';

describe('useProductListHook', () => {
  let _result: any;
  beforeEach(() => {
    const { result } = renderHook(
      () => useProductListHook(),
      {
        wrapper: ({ children }) => {
          return (
            <Provider store={store}>
              <BrowserRouter>
                {children}
              </BrowserRouter>
            </Provider>
          );
        },
      }
    );
    _result = result;
  });

  it('should fetch categories', async () => {
    act(() => {
      vi.spyOn(ProductsAPI, 'getProductsCategories').mockResolvedValue(['jewelery', 'clothes']);
      store.dispatch(asyncGetProductsCategoriesThunk());
    });

    await waitFor(() => {
      expect(_result.current.categories).toEqual(['all', 'jewelery', 'clothes']);
    });
  });

  it('should set jewelery category as selected', async () => {
    act(() => {
      vi.spyOn(ProductsAPI, 'getProductsCategories').mockResolvedValue(['jewelery', 'clothes']);
      store.dispatch(asyncGetProductsCategoriesThunk());
    });

    act(() => {
      _result.current.onSelectCategory('jewelery');
    });

    await waitFor(() => {
      expect(_result.current.category).toEqual('jewelery');
    });
  });

  it('should set default category from url and download products', async () => {
    act(() => {
      _result.current.category = 'cloth';
      vi.spyOn(ProductsAPI, 'getProductsByCategory').mockResolvedValue([{ id: 1, category: 'cloth' } as any]);
      store.dispatch(asyncGetProductsThunk('cloth'));
    })

    await waitFor(() => {
      expect(_result.current.products[0].category).toEqual('cloth');
    });
  });
});
