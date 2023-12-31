import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Google from '../images/google.png'
import email from '../images/email.png'
import { RecaptchaVerifier, signInWithPhoneNumber , GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth, googleProvider} from '../firebase/setup'
import foodi from '../images/foodi.jpg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login() {
   const navigate = useNavigate()
    const [phone,setPhone]=useState('');
    const [user, setUser]=useState(null);
    const [otp,setOtp]=useState("");

    const sendOtp =()=>{
      try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = signInWithPhoneNumber(auth,phone,recaptcha); 
      setUser(confirmation);
      }
      catch (err) {
        console.error(err);
        
      }
      
    }
    const verifyOtp= async()=>{
      try{
        await user.confirm()
        auth.currentUser?.phoneNumber && toast.success('Logged in successfully');
        auth.currentUser?.phoneNumber && navigate('/main');
      }
      catch(err){
        console.error(err);
        toast.error('Something went wrong')
      }
     
    }
    const googleSignin = async()=>{
      try{
        await signInWithPopup(auth, googleProvider)
        
        auth.currentUser?.email && toast.success("Logged in successfully");
      setTimeout(()=>{
        auth.currentUser?.email && navigate("/main");
      },1000)
      }
      catch(err){
        console.error(err);
        toast.error('Something went wrong')
      }
      
    }
    
  return (
    <>
    <ToastContainer/>
     <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true"  style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${foodi})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
  
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-96 sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          {/* <div className="sm:flex sm:items-start">
            
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"> */}
            <div className='flex'>

            <h3 className="text-2xl font-semibold leading-6 text-gray-900 " id="modal-title">Log in</h3>
            <Link to='/'>
            <h1 className='ml-60 '>X</h1>
            
            </Link>
            </div>
              
              <div className='mt-12 '>
              <PhoneInput className='mt-12' country={'us'} onChange={(phone)=> setPhone('+'+phone) } 
              inputStyle={{width:"335px" , height:"50px"}}
              placeholder='Phone' buttonStyle={{backgroundColor:"white"}}></PhoneInput>
              </div>
              <button onClick={sendOtp} className="bg-rose-500  text-white w-full h-12 py-2 px-4 rounded mt-5">
  Send One Time Password
</button>
<div className='mt-2' id='recaptcha'></div>
{phone && <input onChange={(e)=>setOtp(e.target.value)} className="mt-3 outline-none border  
 border-gray-300 text-gray-900 text-sm rounded-sm  block w-full p-2.5" placeholder="Enter OTP" required></input>}
{otp && <button onClick={verifyOtp} className="bg-rose-500  text-white w-80 h-12 py-2 px-4 rounded mt-5">
  Verify One Time Password
</button> }
{!phone && <div>
 
 <div onClick={googleSignin} className=" cursor-pointer flex items-center border border-spacing-1 rounded-lg p-3">
                 <img src={Google} className='w-7 h-7'></img>
                 <button className='ml-5'>Continue with Google</button>
               </div>
               <Link to='/emailLogin'>
               <div className="mt-5 flex items-center border border-spacing-1 rounded-lg p-3">
                 <img src={email} className='w-7 h-7'></img>
                 <button className='ml-5'>Continue with Mail</button>
               </div>
               </Link>
              
 </div>}

<h1 className=' text-center'>or</h1>
              
              <hr></hr>
              <h1 className='text-base mt-5'>New to Zomato? <Link to='/signup'> <span className='text-red-500'> Create Account</span></Link>  </h1>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
   
//   </div>
// </div>

  )
}

export default Login
