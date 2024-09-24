import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
      productCart: [],
      userInfo: null,
};

export const shoppingSlice = createSlice({
      name: 'shopping',
      initialState,
      reducers: {
            addToCart: (state, action) => {
                  const existingProduct = state.productCart.find(
                        // @ts-ignore
                        (item) => item._id === action.payload._id
                  );
                  if (existingProduct) {
                        // toast.error('Product already added!');
                        // @ts-ignore
                        existingProduct.quantity += action.payload.quantity;
                  } else {
                        toast.success('Product added successfully!');
                        // @ts-ignore
                        state.productCart.push(action.payload);
                  }
            },

            increase: (state, action) => {
                  // @ts-ignore
                  const existingProduct = state.productCart.find((item) => item._id === action.payload)
                  if (existingProduct) {
                        // @ts-ignore
                        existingProduct.quantity += 1
                  }
            },

            decrease: (state, action) => {
                  // @ts-ignore
                  const existingProduct = state.productCart.find((item) => item._id === action.payload)
                  if (existingProduct) {
                        //@ts-ignore
                        existingProduct.quantity -= 1
                  }
            },

            cartDelete: (state, action) => {
                  // @ts-ignore
                  state.productCart = state.productCart.filter((item) => item._id !== action.payload)
            },
            addUser: (state, action) => {
                  state.userInfo = action.payload;
            },
            removeUser: (state) => {
                  state.userInfo = null;
            },
      },
});

export const { addToCart, addUser, removeUser, cartDelete, increase, decrease } = shoppingSlice.actions;

export default shoppingSlice.reducer;
