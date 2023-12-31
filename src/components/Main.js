import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Menubar from './Menubar'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'


const Main = () => {
  const[search,setSearch] = useState('');
  const location = useLocation()
  const [rest,setRest]=useState([])
  const getRestaurants = async() =>{
    try {
      await fetch('https://api.spoonacular.com/food/restaurants/search?apiKey=64f7ed6d44a245a7b86434d97ba2c559')
    .then(resp => resp.json())
    .then(json => setRest(json.restaurants))

    }
    catch(err) {
      console.error(err);}
    
  }
  useEffect(() =>{
    getRestaurants();
  },[])
  console.log(location)
  return (
    <div >
     <Navbar city={location.state?.city} setSearch={setSearch}></Navbar>
     <Menubar></Menubar>
     <Home rest={rest} city={location.state?.city} search={search}></Home>
    </div>
  )
}

export default Main
