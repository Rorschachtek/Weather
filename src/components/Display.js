
import AppController from "./AppController";


const Display = ({city}) => {
  const {values, loading, error} = AppController({city:city})
 
       
  
      return (
     <div className='Display'>
      <h3>{city}</h3>
      {values.main&&<div className='w-card'>
        <p>
          {values.weather.main}
        </p>
        <div className='Temp'>
          <p>
          Temperature : {(values.main.temp-273.15).toFixed(2)}C
          </p>
          <p>
            Feels Like:  {(values.main.feels_like-273.15).toFixed(2)}C
          </p>
        </div>
      </div>}
      {loading && <p>loading...</p>}
      {error&& <p>Error..Please check spelling or try to refresh</p>}
     
      </div>
  )

  
}



export default Display
