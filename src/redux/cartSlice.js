import { createSlice } from "@reduxjs/toolkit";
import { images } from "../assets/images/index";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
  ],
  reducers: {
    addToCart: (state, action) => {
      const { name, id, price, img } = action.payload;

      //if item is already present in the state, then update its quantity.
      let itemAlreadyPresent = false;
      state.forEach((item) => {
        if (item.id === id) {
          item.qt += 1;
          itemAlreadyPresent = true;
        }
        return item;
      });

      //if item is not present in the state already, then push a new item object into the state
      if (itemAlreadyPresent === false) {
        state.push({
          id,
          name,
          img,
          price,
          qt: 1,
        });
      }
    },
    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      state.map((item) => {
        if (item.id === id) {
          item.qt += 1;
        }
        return item;
      });
      // state.filter((item) => item.qt >=1);
      // console.log(state)
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      state.map((item, index) => {
        if (item.id === id && item.qt >= 1) {
          item.qt -= 1;
        }
        return item;
      });
      //delete the items with qt=0 from the state
      for (let i = state.length - 1; i >= 0; i--) {
        if (state[i].qt === 0) {
          state.splice(i, 1);
        }
      }
    },
    clearCart : (state,action) => {
      state.length = 0;
    }
  },
});

export const { addToCart, increaseItemQuantity, decreaseItemQuantity,clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
