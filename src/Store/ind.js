import { createSlice, configureStore } from "@reduxjs/toolkit";

// const initialState = { basket: [] };
const Add = createSlice({
  name: "getBasketTotal",
  initialState: { basket: [], username: null },
  reducers: {
    addToBasket: (state, action) => {
      return { ...state, basket: [action.payload, ...state.basket] };
    },
    getUsername: (state, action) => {
      return { ...state, username: [action.payload] };
    },
    setUserNull: (state) => {
      state.username = null;
    },
    removeFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product(id:${action.id}as its not in basket)`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    },
  },
});

// const { actions, reducer } = Add;
const store = configureStore({
  reducer: { total: Add.reducer },
});

export const { addToBasket, removeFromBasket, getUsername, setUserNull } =
  Add.actions;
export default store;
