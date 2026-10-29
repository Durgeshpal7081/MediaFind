import { createSlice } from "@reduxjs/toolkit";
import {toast,Slide} from 'react-toastify'

const initialState={
    items:JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice=createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
            // state.items.push(action.payload)
            // localStorage.setItem('collection',JSON.stringify(state.items))
            const alreadyExist=state.items.find(
                items=> items.id===action.payload.id
            )
            if(!alreadyExist){
                state.items.push(action.payload)
                localStorage.setItem('collection',JSON.stringify(state.items))
            }
        },
        removeCollection:(state,action)=>{
            console.log('removed');
            state.items=state.items.filter(
                items=>items.id !==action.payload
                )
                console.log(state.items)
                localStorage.setItem('collection',JSON.stringify(state.items))
                
        },
        clearCollection:(state)=>{
            state.items=[]
            localStorage.removeItem('collection')
        },
        addedToast:()=>{
            toast.success('Added to collection!✅', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Slide,
            });
        },
        removeToast:()=>{
            toast.error('Remove from collection!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
        });
        }
    }
})
export const{
    addCollection,removeCollection,clearCollection,addedToast,removeToast,
}=collectionSlice.actions;
export default collectionSlice.reducer