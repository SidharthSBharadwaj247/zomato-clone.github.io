import React, { useEffect, useState } from 'react';
import foodw from '../images/foodw.jpg';
import { Link } from 'react-router-dom';
import arrowimg from '../images/arrow.png'


function Welcome() {
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
  useEffect(()=>{
    getRestaurants();
  },[])
  return (
    <>
     <div
      className=" text-white text-center h-screen "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.7)) ,url(${foodw})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

      }}
    >
      <div className='pl-60'>
        <Link to='/login'><button className=' ml-96 text-lg mt-6'>Log in</button> </Link>
      <Link to='/signup'> <button className='ml-7 text-lg mt-6'>Sign up</button></Link>
     
      </div>
      <h1 className='text-6xl font-extrabold mt-44 italic'>zomato clone </h1>
      <h1 className='4xl'>Find the best restaurants, cafés and bars <br/>around the world</h1>
      <h1 className='text-3xl  text-center mt-10'>Popular loactions around the world</h1>
      <h1 className='text-xl text-white text-center mt-10'>From swanky upscale restaurants to the cosiest hidden gems serving 
      the most incredible food,<br/> Zomato covers it all. 
        Explore menus, and millions of restaurant photos and reviews from users <br/> just like you, to find your next great meal.</h1>
        <div className='grid grid-cols-3 gap-y-4 bg-white'>
        {rest.map((data)=>{
          return<>
          <Link to='/main' state={{city:data.address?.city}}> 
          <div className='flex items-center border border-spacing-1 shadow-lg w-80 p-4 rounded-lg ml-24'>
          <h1 className=' text-xl text-gray-500'>
            {data.address?.city}
          </h1>
          <img className='w-2 h-2 ml-40' src={arrowimg }></img>
        </div>
          </Link>
 
          </>
        })}
        </div>
        
        
    </div>
    </>
   
  );
}

export default Welcome;
