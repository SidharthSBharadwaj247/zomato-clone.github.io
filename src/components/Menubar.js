import React from 'react'
import biriyani from '../images/biriyani.jpg'
import sandwich from '../images/sandwich.jpg'
import pizza from '../images/pizza.jpg'
import butter from '../images/butter.jpg'
import burger from '../images/burger.jpg'
import cake from '../images/cake.jpg'
const Menubar = () => {
  return (
    <div className='bg-zinc-100 p-10'>
      <h1 className='text-3xl'>Inspiration for your first order</h1>
      <div className='flex mt-10'>
        <img src={biriyani} className=' w-40 h-40 rounded-full'></img>
        <img src={cake} className=' w-40 h-40 rounded-full ml-11'></img>
        <img src={butter} className=' w-40 h-40 rounded-full ml-11'></img>
        <img src={biriyani} className=' w-40 h-40 rounded-full ml-11'></img>
        <img src={burger} className=' w-40 h-40 rounded-full ml-11'></img>
        <img src={pizza} className=' w-40 h-40 rounded-full ml-11'></img>
        <img src={sandwich} className=' w-40 h-40 rounded-full ml-11'></img>
      </div>
    </div>
  )
}

export default Menubar
