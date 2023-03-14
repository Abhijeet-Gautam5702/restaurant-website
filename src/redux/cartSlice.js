import { createSlice } from "@reduxjs/toolkit";
import { images } from "../assets/images/index";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    {
      id: 0.5,
      name: "Stock Item",
      price: 100,
      qt: 2,
      img: images.gallery4,
    },
  ],
  reducers: {
    addToCart: (state, action) => {
      const { name, id, price, img } = action.payload;
      state.push({
        id,
        name,
        img,
        price,
        qt: 1,
      });
    },
    increaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      state.filter((item) => {
        if (item.id === id) {
          item.qt += 1;
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      const { id } = action.payload;
      state.filter((item) => {
        if (item.id === id && item.qt > 0) {
          item.qt -= 1;
        }
        return item;
      });
    },
  },
});

export const { addToCart, increaseItemQuantity, decreaseItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
