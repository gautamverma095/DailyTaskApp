import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
          <Link href ="/">Task</Link>
          <Link href ="/login">Login</Link>
      <Link href="/signup">
         Signup 
      </Link>
      </nav>
  )
}

export default Navbar