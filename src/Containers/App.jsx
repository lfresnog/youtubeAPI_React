import React,{useState} from 'react';
import './App.css';
// import HomePage from '../Components/HomePage';
import Header from '../Components/Header'
import axios from 'axios';

function App() {
  const [data,setData] = useState([]);
  
  const onSearch = (search) => {
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
              const results = response.data.items;
              console.log(results);
              setData(results);
          }); 
    }
  };
    
  return (
    <div className="App">
      <Header onSearch={onSearch} data={data}/>
      <div className='Results'>
        {data.map(elem => {return <span >{elem.snippet.title}</span>})}
      </div>
    </div>
  );
}

export default App;
