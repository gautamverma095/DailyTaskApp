import styles from '../styles/Home.module.css'
import { setCookie, hasCookie } from 'cookies-next';
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { userLoginThunk } from '../redux/login/action';
import { useRouter } from 'next/router'





export default function Login() {
  
 const [user, setUser] = useState({
        userName : "",
        password: "",
    })
  const ref = useRef("")
    const router = useRouter();
  const { isLoading, token } = useSelector((state) => state.login)
   const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }

  const handleSubmit = (e) => {
    e.preventDefault()
      if(user.userName == "" || user.password == "")
      {
        alert("Please enter all details")

      }
      else {
       dispatch(userLoginThunk(user))
      }
    setUser({
        userName : "",
        password: "",
    })
        
  }
  
  useEffect(() => {
     if (hasCookie("token"))
        {
           router.push('/')
            }
  },[handleSubmit])

   


  return (
    <>
      <div className='w-10/12 flex justify-center sm:justify-between align-middle m-auto mt-12 border-solid border-2 border-yellow '>

        <div className='w-full sm:w-5/12 border-solid border-2 border-gray-400 rounded-md p-6'
        >
          <h1 className='font-light text-2xl mb-7'
          >Welcome !</h1>

          <h1 className='font-medium text-3xl mb-2'
          >Sign in to</h1>
          <div className="grid gap-6 mb-6">

            <p className='text-sm mb-8'>Lorem Ipsum is simply </p>

            <div className="mb-1">
              <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
              <input type="text"
                className="bg-gray-50 border text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700  "
                placeholder='Enter your username' name="userName"
                required
                onChange={handleChange} value={user.userName}
              />
            </div>

            <div className="mb-0">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password"  className="bg-gray-50 border text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700  "
                placeholder='Enter your password' name="password"
                onChange={handleChange} value={user.password} required />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input type="checkbox" 
                  required

                />
              </div>
              <div for="remember" className=" dark:text-gray-300 w-full flex justify-between">
                <p>Remember me</p> <p><a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a></p></div>
            </div>


            <button className="text-white bg-black hover:bg-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto text-center
            p-1 h-9"
 onClick={handleSubmit}
            >
              Login
              
            </button>
            



            <p className='m-auto font-light'
            >Don’y have an Account ?  <span className='font-semibold text-base'><Link href="/signup">Register</Link></span></p>

          </div>

        </div>



        <div  className='hidden align-middle sm:flex w-80 border-2 border-red-600 '
        >
          <img  src="https://millionairetrack.com/assets/images/believe.png" alt='team'
           
          />
        </div>


      </div>
    </>
  )
}
