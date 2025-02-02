import { EntityState } from './entity-state.type';
import { Product } from './product.type';

export type ProductsState = {
  products: EntityState<Product[]>;
  categories: EntityState<string[]>;
  preview: EntityState<Product>;
};

export type CartState = {
  items: Product[];
  total: number;
  timestamp: number | null;
};
