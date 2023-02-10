import { createSlice } from "@reduxjs/toolkit";

export const poketReducer = createSlice({
    name: 'productFilter',
    initialState:{
        pokeFavoris: []
    },
    reducers:{
        toogleFavoris:(state, action)=>{
            const tabFavName = state.pokeFavoris.map(item => item.name)
            const checkPokName = tabFavName.find((e)=> e === action.payload.name)
            if(checkPokName !== action.payload.name){
                state.pokeFavoris = [...state.pokeFavoris, action.payload]
            }else{
                state.pokeFavoris = state.pokeFavoris.filter((item)=> item.name !== action.payload.name)
            }
        }
    },
})

export const {toogleFavoris} = poketReducer.actions
export const getFav = (state) => state.poketReducer.pokeFavoris
export default poketReducer.reducer