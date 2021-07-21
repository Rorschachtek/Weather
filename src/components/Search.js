import React, { useState } from 'react'

const Search = ({updateCity}) => {
    const [city, setCity]=useState('');
    const onSubmit=(i)=>{
        i.preventDefault();
        if(!city){
            alert('add a City');
            return;
        }
        updateCity(city)
    }
    return (
        <form className='form-control' onSubmit={onSubmit}>
            <input type='text' placeholder='Enter City' value={city} onChange={(e)=>setCity(e.target.value)}/>
            {/* <button type='submit'>Submit</button> */}

        </form>
    )
}

export default Search
