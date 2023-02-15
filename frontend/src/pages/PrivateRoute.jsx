import { hasCookie } from 'cookies-next'
import React from 'react'
import { useRouter } from 'next/router'

const PrivateRoute = ({ children }) => {
   const router = useRouter();
    if (!hasCookie("token"))
        {
        return router.push('/login')
    }
    
    return children
 
}

export default PrivateRoute