import React from 'react'
import {GoBell} from "react-icons/go"
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
        <div>
            <h1 className="text-xs">Welcome Back!</h1>
            <p className="text-xl font-semibold">Name</p>
        </div>
    </div>
  )
}

export default Header