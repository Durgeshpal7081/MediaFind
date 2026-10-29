import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tab=['photos','videos','gif']

    const dispatch=useDispatch()
    const activeTab=useSelector((state)=>state.search.activeTab)
  return (
    <div className='flex gap-5 p-10'>
      {tab.map(function(ele,idx){
        return( <button 
        className={`${(activeTab==ele?'bg-blue-600':'bg-gray-700')} bg-gray-400 px-2 py-3 rounded uppercase cursor-pointer active:scale-95`} 
        key={idx}
        onClick={()=>{
            dispatch(setActiveTabs(ele))
        }}>{ele}</button>
        )
      })}
    </div>
  )
}

export default Tabs
