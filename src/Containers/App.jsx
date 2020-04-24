import React,{useState} from 'react';
import './App.css';
// import HomePage from '../Components/HomePage';
import Header from '../Components/Header/Header'
import VideoCard from '../Components/VideoCard/VideoCard'
import VideoPage from '../Components/VideoPage/VideoPage'
import axios from 'axios';

function App() {
  const [page,setPage] = useState(0);
  const [data,setData] = useState([]);
  const [ID,setID] = useState([]);


  const clean = () =>{
    setData([]);
    setID([]);
    setPage(0);
  }
  
  const onSearch = (search,type) => {
    if(search){
      axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
          key:'AIzaSyCVP0an4nC3eCCMiuvlthx0Ew6GGk5Z8nk',
          maxResults:(type==='channel'?15:5),
          part:'snippet',
          order:'viewCount',
          ...(type==='name'?{q:search}:type==='video'?{relatedToVideoId:search,type:'video'}:{channelId:search}),
        }
      })
      .then(response => {
        console.log(Error);
              const results = response.data.items.map((result)=>{
                return {
                    miniature:result.snippet.thumbnails.medium.url,
                    title:result.snippet.title,
                    channel:result.snippet.channelTitle,
                    date:result.snippet.publishedAt.slice(0,10),
                    description:result.snippet.description,
                    id:result.id,
                    channel_id:result.snippet.channelId
                }
              });
              console.log(results);
              setData(results);
              setPage(type==='name'?1:type==='video'?2:3);
          }); 
    }
  };

  const onID = (ID,type) => {
    const url = (type==='video'?'https://www.googleapis.com/youtube/v3/videos':'https://www.googleapis.com/youtube/v3/channels');
    console.log(url);
    if(ID){
      axios.get(url,{
        params:{
          key:'AIzaSyCVP0an4nC3eCCMiuvlthx0Ew6GGk5Z8nk',
          part:'snippet',
          id:ID
        }
      })
      .then(response => {
              const results = response.data.items.map((result)=>{
                return {
                    miniature:result.snippet.thumbnails.medium.url,
                    title:result.snippet.title,
                    ...(type==='video'?{channel:result.snippet.channelTitle}:null),
                    ...(type==='video'?{date:result.snippet.publishedAt.slice(0,10)}:null),
                    ...(type==='video'?{description:result.snippet.description}:null),
                    ...(type==='video'?{video_id:result.id}:null)
                }
              });
              console.log(results);
              setID(results);
              console.log(results[0].video_id)
          }); 
    }
  };
    
  return (
    <div className="App">
      <Header onSearch={onSearch} clean={clean}/>

    {(page === 1)?
    <div className='search_results'>
      {data.map(elem => {return <VideoCard onID = {onID} onSearch={onSearch} key={elem.title} data={elem} description={elem.description}/>})}
    </div>
    :page === 2?<VideoPage onID ={onID} onSearch={onSearch} data={data} ID={ID}/>:null}
      
    </div>
    
  );
}

export default App;
