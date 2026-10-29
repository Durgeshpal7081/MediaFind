import React from 'react'
import SearchBar from '../Ccomponents/SearchBar'
import Tabs from '../Ccomponents/Tabs'
import ResultGrid from '../Ccomponents/ResultGrid'
import { useSelector } from 'react-redux'
const HomePages = () => {
    const {query}=useSelector((store)=>store.search)
  return (
    <div>
      <SearchBar/>
      {query != ''?<div> <Tabs/>
      <ResultGrid/></div>:''}
    </div>
  )
}

export default HomePages
