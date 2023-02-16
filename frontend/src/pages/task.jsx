import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from "./Loader"
import { deleteCookie,hasCookie } from 'cookies-next'
import { addTaskThunk, getTaskThunk } from '../redux/task/action'
import nextCookie from 'next-cookies';
import { useRouter } from 'next/router'

const Task = () => {
  const [allTask, setAllTask] = useState([])
  const [task, setTask] = useState("")
  const [date, setDate] = useState("")
  
  const { isLoading, token } = useSelector((state) => state.login)
  const { gettingAllTasks, user } = useSelector((state) => state.task)
  const dispatch = useDispatch()
    const router = useRouter();
 
  const handleLogout = () => {
    deleteCookie("token")
   router.push("/login")
  }
  const handleChange = (e) => {
    setTask(e.target.value)
    
  }
  const handleAdd = () => {
    // console.log(task);
    if (task == "")
    {
      alert("Task cannot be empty")
      }
    else {
       let authToken = nextCookie("token")
 
    let obj = { task,token:authToken.token}
    dispatch(addTaskThunk(obj))
    setTask("")
      }
   
    
  }
  useEffect(() => {
    if (!hasCookie("token"))
    {
         router.push('/login')
    }
      let dateSetting = new Date().toLocaleDateString()
      setDate(dateSetting);
      let authToken = nextCookie("token")
    let obj = { token: authToken.token }
    if (authToken.token)
    {
      
      dispatch(getTaskThunk(obj))
      }

      
    }, [])

  return (
      <>
      <div className='w-10/12 sm:w-2/6 m-auto mt-14 h-5/6 border-solid border-2 border-grey'>



        <div>

          <div className='border-solid border-2 border-white w-11/12 m-auto mt-8'>
            
            <h1 className='font-light text-2xl'>Hello</h1>

            <h1 className='font-medium text-3xl mt-1'
            >{user.userName}</h1>

            <p className='font-normal text-base mt-3'
            >Good to see you here !</p>

            <p className='text-base font-bold mt-12 mb-8'
            >Tasks for <span>{date}</span></p>

            <div className='border-solid border-2 border-white h-40 mb-8'>
              <ul className='list-disc ml-6 font-normal text-base'>
                {
                  gettingAllTasks.map((elem) => (
                    <li className='mt-1' key={elem._id}>{elem.task}</li>
                  ))
                }
              </ul>
            </div>

            <input onChange={handleChange} name = "task" value ={task} type="text" placeholder='Add Task' 
            
         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            /> <br />

            <button
              onClick={handleAdd}
            className="w-full bg-black text-white p-1 mt-2 rounded-lg
            hover:bg-gray-700 font-medium text-sm h-9"
            >
              Add New Task
              </button><br />

            <button 
              onClick={handleLogout}
            className="w-full mt-2 p-1 rounded-md"
            >Logout</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default Task