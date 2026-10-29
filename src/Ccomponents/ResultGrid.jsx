import  { useEffect } from 'react'
import { fetchPhotos,fetchVideos,fetchgif } from "../Api/mediaApi";
import {setLoading,setError,setResults } from "../redux/features/searchSlice";
import { useDispatch, useSelector } from 'react-redux';
import ResultCard from './ResultCard';
const ResultGrid = () => {
     const dispatch=useDispatch()
     const {query,activeTab,results,loading,error}=useSelector((store)=>store.search)
    useEffect(function(){
        if(!query) return 
     const getData=async ()=>{
     try {
        dispatch(setLoading())
            let data=[]
            if(activeTab=='photos'){
                let response=await fetchPhotos(query)
                data=response.results.map((items)=>({
                    id:items.id,
                    type:'photo',
                    title:items.alt_description,
                    thumnail:items.urls.small,
                    src:items.urls.full,
                    url:items.links.html
                }))
            }
            if(activeTab=='videos'){
                let response=await fetchVideos(query)
                data=response.results.map((items)=>({
                    id:items.id,
                    type:'video',
                    title:items.user.name || 'video',
                    thumnail:items.images,
                    src:items.video_files[0].link,
                    url:items.url
                }))
            }
            if(activeTab=='gif'){
                let response=await fetchgif(query)
                data=response.data.results.map((items)=>({
                    id:items.id,
                    type:'gif',
                    title:items.title || 'GIF',
                    thumnail:items.media_formats.tinygif.url ,
                    src:items.media_formats.gifs.url,
                    url:items.url
                }))
            }
            dispatch(setResults(data))
     } catch (err) {
        dispatch(setError(err));
     } 
    };
            getData()
        },[query,activeTab,dispatch])
        if(error) return <h1>Error</h1>
        if(loading) return <h1>Loading.....</h1>
     return (
    <div className='flex flex-wrap w-full justify-between gap-6 overflow-auto px-10'>
       {results.map((items,idx) => {
        return <div key={idx}>
          <ResultCard items={items}/>
        </div>
       })}
    </div>
  )
};
export default ResultGrid
