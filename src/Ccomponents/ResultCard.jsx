  // const addToCollection=(items)=>{
  //   const oldData=JSON.parse(localStorage.getItem('collection')) || []
  //   const newData=[...oldData,items]


  //   localStorage.setItem('collection',JSON.stringify(newData))
    
// }
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'

const ResultCard = ({ items }) => {

    const dispatch = useDispatch()

    // Prevent errors if item is missing
    if (!items) {
        console.warn('ResultCard received an undefined item')
        return null;
    }

    const addToCollection = (items) => {
        dispatch(addCollection(items))
        dispatch(addedToast())
        
    }

    return (
        <div className='w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden'>
            <a target='_blank' className='h-full' href={items.url}>
                {items.type == 'photo' ? <img className='h-full w-full object-cover object-center' src={items.src} alt="" /> : ''}
                {items.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={items.src}></video> : ''}
                {items.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={items.src} alt="" /> : ''}
            </a>
            <div id='bottom' className='flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white'>
                <h2 className='text-lg font-semibold capitalize h-14 overflow-hidden'>{items.title}</h2>
                <button
                    onClick={() => {
                        addToCollection(items)
                    }}
                    className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default ResultCard
