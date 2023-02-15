import { useEffect, useMemo, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'
import { setCookie, hasCookie } from 'cookies-next';
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from "react-redux"
import { userSignUpThunk } from '@/redux/login/action';

export default function SignUp() {
  const [user, setUser] = useState({
        userName : "",
        email: "",
        password: "",
    })
  const ref = useRef("")
     const router = useRouter();
 const dispatch = useDispatch()
  const { isLoading,token } = useSelector((state) => state.login)
  

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }

  const handleSubmit = (e) => {
    e.preventDefault()
      if(user.userName == "" || user.email == "" || user.password == "")
      {
        alert("Please enter all details")
      }
      else {
        if (user.password != ref.current.value)
        {
          alert("Password does not match")
        }
        else {
          dispatch(userSignUpThunk(user))
          
        }
    }
        
    }
  useEffect(() => {
      
        if (hasCookie("token"))
        {
             router.push("/")
            }
        
    },[token])


  return (
    <>
      <div className='w-10/12 flex justify-center sm:justify-between align-middle m-auto mt-8 border-solid border-2 border-white'>

        <div className='w-full sm:w-5/12 border-solid border-2 border-gray-400 rounded-md p-6'
        >
          <h1 className='font-light text-2xl mb-4'
          >Welcome !</h1>

          <h1 className='font-medium text-3xl mb-2'
          >Sign up to</h1>
          <div className="grid gap-6 mb-4">

            <p className='text-sm mb-6'>Lorem Ipsum is simply </p>

            <div className="mb-0">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email"    className="bg-gray-50 border text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700  "
                placeholder='Enter your email' name="email"
                onChange={handleChange} value={user.email}
              />
            </div>


            <div className="mb-0">
              <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
              <input type="text"    className="bg-gray-50 border text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700  "
                placeholder='Enter your username' name="userName" required
                onChange={handleChange} value={user.userName}
              />
            </div>


            <div className="mb-0">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password"     className="bg-gray-50 border text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700  "
                placeholder='Enter your password' name="password"
                onChange={handleChange} value={user.password} />
            </div>


            <div className="mb-0">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
              <input type="password"    className="bg-gray-50 border text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700  "
                placeholder='Confirm your password' ref={ref} name="confirmpassword"
                />
            </div>



            <button className="text-white bg-black hover:bg-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto text-center
              p-1 h-9"
     onClick={handleSubmit}
            >
              Register
              
            </button>

            <p className='m-auto font-light'
            >Already have an Account ?  <span className='font-semibold text-base'><Link href="/login">Login</Link></span></p>

          </div>

        </div>


        <div className='w-7/12 hidden align-middle sm:flex'
        >
         <img  src="https://millionairetrack.com/assets/images/believe.png" alt='team'
           
          />
        </div>


      </div>
    </>
  )
}
