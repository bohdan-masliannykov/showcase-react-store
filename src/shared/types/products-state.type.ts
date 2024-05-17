import { EntityState } from './entity-state.type';
import { Product } from './product.type';

export type ProductsState = {
  products: EntityState<Product[]>;
  preview: EntityState<Product>;
};
