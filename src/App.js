import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY="258f676fe5562b81b89c1860cc13eeaf";

class App extends React.Component{

  getWeather= async() => {
    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}
    &untis=metric`);
    const data=await api_call.json();
    console.log(data);
    }
    
  render(){
    return(
     <div>
       <Form />
       <Title />
       <Weather />  
     </div> 
    );
  }
}

export default App;