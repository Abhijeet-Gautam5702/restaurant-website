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
      //delete the item with qt=0 from the state
      const idx = state.find((item) => item.id === id && item.qt === 0);
      if (idx) {
        state.splice(idx, 1);
      }
    },
  },
});

export const { addToCart, increaseItemQuantity, decreaseItemQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
