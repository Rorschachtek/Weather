import {useReducer, useEffect} from 'react'
import axios from 'axios'
const key = process.env.REACT_APP_API_KEY
const actions={
    makeReq: 'makeReq',
    getData:'getdata',
    error:'error'
 }
const AppController = (city,params) => {
   
    
    const [state, dispatch] = useReducer(reducer,{values: [], loading:true })
   
    function reducer(state, action){
        switch(action.type){
            case actions.makeReq:
                return {loading:true, values: []};
            case actions.getData:
                return{loading:false, values:action.payload};
            case actions.error:
                return{loading: false,error:true, values:[]}
            default:
               return state;
        }
    }
    useEffect(()=>{
        dispatch({type: actions.makeReq})
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${key}`)
        .then(res=>{
          
         dispatch({type:actions.getData, payload:res.data}) 
        })
        .catch(e=>{
            dispatch({type:actions.error})
        })
         
    },[city.city])
    return state;
    
}

export default AppController
