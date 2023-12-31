import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const Details = () => {
    const location = useLocation();
    console.log(location)
  return (
    <>
    <Navbar></Navbar>
    <hr></hr>
    <div className='text-xs flex text-gray-500 pl-24'>
      <Link to='/main'>
      <h1>
    Home
      </h1>
      </Link>
  
      <h1 className='ml-2'>/</h1>
      <Link to='/'><h1 className='ml-2'>World</h1></Link>
    
    </div>
    <div className='pl-24 pt-3'>
        
      <img className='w-11/12 h-96' src={location.state.data.logo_photos}/>
      <div className='flex mt-3'>
      <h1 className='text-4xl'>{location.state.data.description}</h1>
      <h1 className='bg-green-800 text-white rounded-lg w-10 p-2 font-semibold ml-96'>{location.state.data.weighted_rating_value}</h1>
      <h1 className='text-gray-600 ml-2'>Rating</h1>
      </div>
      
      <h1>{location.state.data.cuisines[0]},{location.state.data.cuisines[1]},{location.state.data.cuisines[2]},{location.state.data.cuisines[3]},{location.state.data.cuisines[4]}</h1>
      <h1 className='text-gray-400'>{location.state.data.address.street_addr},{location.state.data.address.city}</h1>
      {location.state.data.is_open ?<h1 className='text-yellow-500'>Open now</h1>:<h1 className=' text-red-500'>Not open</h1>}
    </div>
    </>
    
  )
}

export default Details
