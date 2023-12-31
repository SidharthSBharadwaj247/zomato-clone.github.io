import React, { useEffect } from 'react';
import { useState } from 'react';
import search from '../images/search.png';
import Avatar from 'react-avatar';
import { auth } from '../firebase/setup';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';
import drop from '../images/drop.png';
import locationimg from '../images/location.png';
import { useNavigate } from 'react-router-dom';
import logoutimg from '../images/logout.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [authStore, setAuthStore] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthStore(user);
    });
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      !auth.currentUser?.email && toast.success('Logged out');
      setTimeout(() => {
        !auth.currentUser?.email && navigate('/');
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className='flex'>
        <h1 className='text-3xl font-extrabold italic ml-20 pr-10'>Zomato</h1>
        <div className='shadow-lg flex items-center border border-gray-300 w-7/12 rounded-lg h-12 p-3'>
          <img className='h-7 w-7 ml-2' src={locationimg} alt='city'></img>
          <input
            type=''
            className='outline-none text-gray-900 text-lg rounded-lg block w-40 p-2 ml-5'
            placeholder={props.city ?? 'location'}
            required
          ></input>
          <img className='h-5 w-5 mr-4 ml-6' src={drop} alt='drop'></img>
          <h1 className='ml-3 text-gray-400'> </h1>
          <img className='h-5 w-5 mr-4 ml-6' src={search} alt='search'></img>
          <input
            onChange={(e) => {
              props.setSearch(e.target.value);
            }}
            className='outline-none text-gray-900 text-lg rounded-sm block w-96 p-2.5 ml-5'
            placeholder='Search for restaurants'
            required
          ></input>
        </div>
        <div className='flex items-center'>
          {authStore?.photoURL ? (
            <img className='w-12 h-12 ml-32 rounded-full' src={authStore?.photoURL} alt='user-avatar' />
          ) : authStore?.email ? (
            <Avatar className='ml-28' name={authStore?.displayName ?? authStore?.email} round={true} size='40' />
          ) : (
            ''
          )}
          <h1 className='ml-2'>
            {authStore?.displayName?.substring(0, authStore?.displayName.indexOf(' ')) ??
              authStore?.email?.substring(0, authStore?.email.indexOf('@')) ?? ''}
          </h1>
          {!authStore?.email && <Link to='/login'><h1 className='text-gray-600 text-lg ml-20'>Log in</h1></Link>}
          {!authStore?.email && <Link to='/signup'><h1 className='text-gray-600 text-lg ml-5'>Sign up</h1></Link>}
          {authStore && (
            <img
              src={logoutimg}
              onClick={logout}
              className='w-10 h-8 ml-4 p-2 shadow-lg rounded-xl text-gray-600 cursor-pointer'
              alt='logout'
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
