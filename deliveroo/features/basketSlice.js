import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      
      state.items= [...state.items, action.payload]
    },
    removeFromBasket: (state , action ) => {
      const index = state.items.findIndex(
        (item)=> item.id === action.payload.id 
      );

      let newBasket = [...state.items];
      if (index >= 0 ){
        newBasket.splice(index,1);
      }else{
        // error
      }

      state.items = newBasket;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket} = basketSlice.actions

// to select basket items
export const selectBasketItems =(state)=>state.basket.items; 

export const selectBasketItemsWithId =(state,id)=>state.basket.items.filter((items)=> items.id===id );

// exports baskets total value of all items 
export const selectBasketTotal = (state)=>{
  return state.basket.items.reduce((total,item)=> total+=item.price , 0 );
}

export default basketSlice.reducer