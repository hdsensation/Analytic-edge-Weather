import axios from 'axios';
import { useEffect, useState } from 'react';
import { Contxt } from './Components/Context';
import Card from './Components/Card';
import Chart from './Components/Chart';
import './App.css'

function App() {
const [loading, setloading] = useState(true)  

  let deta=Contxt()
  console.log(deta.data)
  

 

  function get(){
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${deta.city}&appid=7131d76449271d162d8aef8feb19706e`)
    .then((r)=>{console.log('chkk',r.data)
      deta.setinfo(r.data)
      return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${r.data.coord.lat}&lon=${r.data.coord.lon}&exclude=hourly,minutely,alerts&units=metric&appid=7131d76449271d162d8aef8feb19706e`)
    })
    .then((r)=>{console.log('testt',r.data)
    deta.setcr(r.data.current)
    deta.set(r.data.daily)
    setloading(false)
  })

  }



  
  useEffect(() => { 
    get()
  }, [])




  if(loading) return <h1>loading</h1>


  return (
    <div  >
      <Card get={get}/>
      <Chart/>
    </div>
  );
}

export default App;
