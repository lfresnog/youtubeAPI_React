import React,{useState} from 'react';
import './App.css';
// import HomePage from '../Components/HomePage';
import Header from '../Components/Header/Header'
import VideoCard from '../Components/VideoCard/VideoCard'
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);
  
  const onSearch = (search,test) => {
    if(search){
      axios.get('https://www.googleapis.com/youtube/v3/search',{
        params:{
          key:'AIzaSyAI99TjLV2uF6La9-vEv5_t2zrlPgddyGo',
          part:'snippet',
          order:'viewCount',
          q:search
        }
      })
      .then(response => {
              const results = response.data.items.map((result)=>{
                return {
                  miniature:result.snippet.thumbnails.medium.url,
                  title:result.snippet.title,
                  channel:result.snippet.channelTitle,
                  date:result.snippet.publishedAt.slice(0,10),
                  description:result.snippet.description,
                  id:result.id
                }
              });
              console.log(results);
              setData(results);
          }); 
    }
  };

  const OnVideo = {}
    
  return (
    <div className="App">
      <Header onSearch={onSearch} data={data}/>

      {(data !== [])?
        <div className='search_results'>
          {data.map(elem => {return <VideoCard key={elem.title} data={elem} />})}
        </div>
      :null}:

    </div>
  );
}

export default App;
