import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
     <div className='flex justify-between items-center py-6 px-10 bg-(--c1)'>
            <Link to='/' className='text-2xl font-semibold'>Media Search</Link>
            <div className='flex justify-between items-center gap-4 text-xl'>
                <Link to='/'  className='text-base font-medium active:scale-95 bg-(--c2) rounded px-4 py-3 '>Search</Link>
                <Link  to='/CollectionPage' className='text-base font-medium active:scale-95 bg-(--c2) rounded px-4 py-3 '>Collection</Link> 
            </div>
        </div>
  )
}

export default Navbar
