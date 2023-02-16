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
      <div className=' ml-20  flex gap-7  mr-5 justify-center   mt-12   w-90 '>

        <div className=' border-solid border-2  rounded-md p-3 w-80'
        >
          <h1 className='font-light text-2xl mb-7'
          >Welcome !</h1>

          <h1 className='font-medium text-3xl mb-2'
          >Sign in to</h1>
          <div className="grid gap-6 mb-6">

            <p className='text-sm mb-8'>Lorem Ipsum is simply </p>

            <div className="mb-1 ">
              <label  className="block text-gray-700 text-sm font-bold mb-2">User name</label>
              <input type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                placeholder='Enter your username' name="userName"
                required
                onChange={handleChange} value={user.userName}
              />
            </div>

            <div className="mb-0">
              <label for="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password"   className="shadow appearance-none border rounded w-full py-2 px-3 text-black-700 leading-tight focus:outline-none focus:shadow-outline "
                placeholder='Enter your password' name="password"
                onChange={handleChange} value={user.password} required />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input type="checkbox" 
                  required

                />
              </div>
              <div for="remember" className=" dark:text-gray-500 w-full flex justify-between">
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



        <div
          className='hidden 
          align-middle 
          sm:flex 
          border-2 
          ml-25'
        >
          <img src="https://millionairetrack.com/assets/images/believe.png"
            style={{ "width": "500px" }}
            alt='team'
          />
           
        </div>


      </div>
    </>
  )
}
