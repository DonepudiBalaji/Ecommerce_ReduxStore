import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: [],
    cartProducts:[]
}
export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: (state , action) => { 
      state.products = action.payload
    },
    addtocart: (state, action) =>{
      const dummy = [...state.cartProducts];
      dummy.push(action.payload);
      state.cartProducts = dummy;
    },
    incrementproduct :( state,action)=>{
      const newProductsArr = [...state.cartProducts];
      newProductsArr.push(action.payload);
      state.cartProducts = newProductsArr;
    },
    decrementproduct :( state,action ) =>{
      const newProductsArr = [...state.cartProducts];
      const searchIndex = newProductsArr.findIndex((el) => el.id === action.payload);
      newProductsArr.splice(searchIndex ,1);
      state.cartProducts = newProductsArr;
    }
  },
})
// Action creators are generated for each case reducer function
export const { fetchProducts, addtocart , incrementproduct , decrementproduct} = productSlice.actions
export default productSlice.reducer