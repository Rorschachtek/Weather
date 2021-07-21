import {  useState } from "react";
import Display from "./components/Display";
import Search from "./components/Search";
function App() {
  const [city,setCity]=useState('Dibrugarh')

  const updateCity= value=>{
    setCity(value)
  }
  return (
   <div className='container'>
     <Search updateCity={updateCity}/>
     <Display city={city}/>
    </div>
  );
}

export default App;
