import React from 'react'
import { DiAndroid } from 'react-icons/di'
import { FaTabletAlt } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { CiGlobe } from 'react-icons/ci'

const Platforms = () => {
  return (
    <div className ="p-5 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-gray-700">Platforms </h1>
      <div className="p-2 grid grid-cols-2 gap-8">
          <div className ="space-y-2 text-gray-500">
            <h1 className="text-2xl font-bold">58</h1>
            <p className="flex items-center space-x-2">
              <CiGlobe/> <span>website</span>
            </p>
          </div>
          <div>
          <h1 className="text-2xl font-bold">87</h1>
          <p className="flex items-center space-x-2">
              <FaApple/> <span>IOS</span>
            </p>
          </div>
          <div>
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
              <DiAndroid/> <span>Android</span>
            </p>
          </div>
          <div>
          <h1 className="text-2xl font-bold">58</h1>
          <p className="flex items-center space-x-2">
              <FaTabletAlt/> <span>Tablets</span>
            </p>
          </div>
      </div>

    </div>
  )
}

export default Platforms