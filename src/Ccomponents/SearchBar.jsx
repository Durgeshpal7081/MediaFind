import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setQuery } from '../redux/features/searchSlice';
const SearchBar = () => {

  
  const [text, setText] = useState('')

  const dispatch=useDispatch()
  const submitHandler=(e)=>{
    e.preventDefault()
    dispatch(setQuery(text))
    setText('')
  }
  return (
     <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex bg-(--c5) px-14 py-10 gap-4'>
        <input
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
        }}
         required 
         className='block w-full p-4 pl-10 text-3xl border px-4 py-4 rounded outline:none'
         type='text' 
         placeholder='Search Anything.....'/>
        <button 
        className='active:scale-95 cursor-pointer text-3xl border px-4 py-4 rounded outline:none'>
        Search
        </button>
      </form>
     </div>
  )
}

export default SearchBar
