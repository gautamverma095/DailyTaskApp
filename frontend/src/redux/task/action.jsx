import axios from "axios"
export const GET_TASK = "GET_TASK"



export const addTask = (payload) => {
    return {
        type: GET_TASK,
        payload
    }
    
}




// middleware

export const addTaskThunk = (data) => (dispatch) => {
    axios.post("https://nextjsexpertia.onrender.com/task/add", { task: data.task }, {
        headers: {
            "Authorization":data.token
        }
    }).then((res) => {
        // console.log(res.data);
        let obj = {token:data.token}
        dispatch(getTaskThunk(obj)) 
        alert("task added")

        
    }).catch((err) => {
        console.log(err.response.data);
        alert(err.response.data.message)
    })
}


export const getTaskThunk = (data) => (dispatch) => {
    axios.get("https://nextjsexpertia.onrender.com/task/get",  {
        headers: {
            "Authorization":data.token
        }
    }).then((res) => {
        // console.log(res);
      dispatch(addTask(res.data))
        
    }).catch((err) => {
        console.log(err);
        // alert(err.response.data.message)
    })
}


