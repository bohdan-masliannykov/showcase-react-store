import { vi } from 'vitest';
import { ProductsAPI } from './products.api';
const BASE_API_URL = 'https://fakestoreapi.com/products';

describe('Products API', () => {
  it('should get products', async () => {
    const mockResponse: any = {
      ok: true,
      json: async () => [
        { id: '1', name: 'Hat', price: 2.99, category: 'jewelery' },
      ],
    };
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);
    const result = await ProductsAPI.getProducts();
    expect(mockFetch).toHaveBeenCalledWith(`${BASE_API_URL}`, {
      method: 'get',
      signal: undefined,
    });
    expect(result).toEqual([
      { id: '1', name: 'Hat', price: 2.99, category: 'jewelery' },
    ]);
  });

  it('should get products by category', async () => {
    const category = 'clothes';
    const mockResponse: any = {
      ok: true,
      json: async () => [{ id: '1', name: 'Hat', price: 2.99, category }],
    };
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);
    const result = await ProductsAPI.getProductsByCategory(category);

    expect(mockFetch).toHaveBeenCalledWith(
      `${BASE_API_URL}/category/${category}`,
      {
        method: 'get',
        signal: undefined,
      }
    );

    expect(result).toEqual([
      { id: '1', name: 'Hat', price: 2.99, category: 'clothes' },
    ]);
  });

  it('should get single products', async () => {
    const id = '2';
    const mockResponse: any = {
      ok: true,
      json: async () => ({ id: '2', name: 'Hat', price: 2.99 }),
    };
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);
    const result = await ProductsAPI.getProductById(id);

    expect(mockFetch).toHaveBeenCalledWith(`${BASE_API_URL}/${id}`, {
      method: 'get',
      signal: undefined,
    });

    expect(result.id).toEqual(id);
  });

  it('should get products categories', async () => {
    const mockResponse: any = {
      ok: true,
      json: async () => ['jewelery', 'clothes'],
    };

    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);
    const result = await ProductsAPI.getProductsCategories();

    expect(mockFetch).toHaveBeenCalledWith(`${BASE_API_URL}/categories`, {
      method: 'get',
      signal: undefined,
    });

    expect(result).toEqual(['jewelery', 'clothes']);
  });

  it('should return categories error', async () => {
    const mockResponse: any = {
      ok: false,
      json: async () => {
        message: 'Unexpected error from server!';
      },
    };
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValue(mockResponse);
    let result: any;
    try {
      result = await ProductsAPI.getProductsCategories();
    } catch (error) {
      result = error;
    }
    expect(result.message).toEqual(
      'Failed to fetch from URL: https://fakestoreapi.com/products/categories'
    );
    expect(mockFetch).toHaveBeenCalledWith(`${BASE_API_URL}/categories`, {
      method: 'get',
      signal: undefined,
    });
  });
});
