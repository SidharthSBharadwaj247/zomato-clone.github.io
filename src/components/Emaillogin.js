import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../firebase/setup';
import emaillog from '../images/emaillog.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Emaillogin = () => {
  const navigate = useNavigate();
    const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const emaillogin= async()=>{
        try {
            const data=await signInWithEmailAndPassword(auth,email,password)
            auth.currentUser?.emailVerified && toast.success('Logged in successfully')
            setTimeout(()=>{
              auth.currentUser?.emailVerified && navigate('/main')
            },1000)
            
           
        }
        catch (err) {
            console.error(err)
            toast.error('Something went wrong')
        }
  }
  return (
    <>
    <ToastContainer/>
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-black text-left 
          shadow-xl transition-all sm:my-8 sm:w-96 sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className='flex'>
              <h3 className="text-2xl font-semibold leading-6 text-gray-900" id="modal-title">Log in</h3>
              <Link to='/'>
              <h1 className='ml-60'>
                X
              </h1>
              </Link>
              
              </div>
              <img className=' w-20 h-20 ml-28 mt-5' src={emaillog}></img>
              <input onChange={(e)=>setEmail(e.target.value)} className="mt-4 outline-none border border-gray-300
               text-gray-900 text-lg rounded-lg block w-full p-2.5" placeholder="Email" required></input>
              <input type='password' onChange={(e)=>setPassword(e.target.value)}
               className="mt-7 outline-none border border-gray-300 text-gray-900 text-lg rounded-lg block w-full p-2.5" placeholder="Password" required></input>
              <button onClick={emaillogin} className="text-2xl bg-rose-500 text-white w-full h-12 py-2 px-4 rounded mt-5">
                Log in with Email
              </button>
              <hr className='mt-3' />
              <h1 className='text-center'>or</h1>
              
              <h1 className='mt-4 text-lg text-gray-500'>Already have an account? <Link to='/login'><span className='text-red-500'> Log in</span></Link> </h1>
            </div>
          </div>
        </div>
      </div>
    </div></>
   
  )
}

export default Emaillogin
