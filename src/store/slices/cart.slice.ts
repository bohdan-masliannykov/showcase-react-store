import { Product } from '@/shared/types/product.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const DELIVERY_CHARGE = 15;
export const CART_DURATION = 5; //minutes

interface CartState {
  items: Product[];
  total: number;
  timestamp: number | null;
}

const cart = localStorage.getItem('cart');

// TODO cart id for auhenticated user to save cart
const initialState: CartState = cart
  ? JSON.parse(cart)
  : {
      items: [],
      total: 0,
      timestamp: null,
    };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload!;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity! += newItem.quantity!;
      } else {
        state.items.push(newItem);
      }

      state.total += newItem.price * newItem.quantity!;
      state.timestamp = Date.now();
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemToRemove = state.items.find((item) => item.id === itemId);

      if (itemToRemove) {
        state.total -= itemToRemove.price * itemToRemove.quantity!;
        state.items = state.items.filter((item) => item.id !== itemId!);
      }

      state.timestamp = state.items.length === 0 ? 0 : Date.now();
      localStorage.setItem('cart', JSON.stringify(state));
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ itemId: number; quantity: number }>
    ) => {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId!);

      if (itemToUpdate) {
        state.total -= itemToUpdate.price * itemToUpdate.quantity!; // previous total
        itemToUpdate.quantity = quantity;
        state.total += itemToUpdate.price * itemToUpdate.quantity!; // new total
      }

      state.timestamp = Date.now();
      localStorage.setItem('cart', JSON.stringify(state));
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.timestamp = null;
      localStorage.removeItem('cart');
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
