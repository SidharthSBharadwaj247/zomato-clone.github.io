import React from 'react'
import loading from '../images/loading.png'
import { Link } from 'react-router-dom'
const Home = (props) => {
  return (
    <div className='p-4 pl-20'>
        <h1 className=' font-semibold text-3xl'>Best food in locations</h1>
        {props.city?<div className='grid grid-cols-3'>
        { props.rest.filter((data)=> data.address.city.includes(props.city)).filter((data)=>data.name.includes(props.search)).map((data)=>{
        
        return <>
        <Link to='/details' state={{data:data ,city:data.address.city}}>
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg mt-12 p-4">

        <img className="w-full rounded-2xl h-60"  src={data.food_photos[0]?? data.store_photos[0]} alt={loading}    />
        <div className="px-6 py-4">
          <div className=" font-semibold text-sm mb-2">{data.name}</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        
      </div>
        </Link>


        </>
        
        })}
        </div>
        :
        <div className='grid grid-cols-3'>
        { props.rest.filter((data)=>data.name.includes(props.search)).map((data)=>{
        
        return <>
<Link to='/details' state={{data:data}}>
<div className="max-w-xs rounded-xl overflow-hidden shadow-lg mt-12 p-4">

<img className="w-full rounded-2xl h-60"  src={data.food_photos[0]?? data.store_photos[0]} alt={loading}    />
<div className="px-6 py-4">
  <div className=" font-semibold text-lg mb-2">{data.name}</div>
  <p className="text-gray-400 text-base">
    {data.cuisines[0]}, {data.cuisines[1]}...
  </p>
</div>

</div>

</Link>

        </>
        
        })}
        </div>
        }
      

    </div>
    
  )
}

export default Home
