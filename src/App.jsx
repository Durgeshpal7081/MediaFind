// import react from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePages from './Pages/HomePages'
import CollectionPage from './Pages/CollectionPage'
import Navbar from './Ccomponents/Navbar'
 import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <div className='min-h-screen w-full text-white bg-gray-950'>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePages/>} />
      <Route path='/CollectionPage' element={<CollectionPage/>}/>
    </Routes>
    <ToastContainer/>
    </div>
  )
}

export default App
