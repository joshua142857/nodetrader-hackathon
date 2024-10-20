import React from 'react'
import ProjectStatistics from '../components/ProjectStatistics'
import Platforms from '../components/Platforms'

const Home = () => {
  return (
    <div className="p-5">
        <div className ="grid md:grid-cols-2 xl:grid-cols-2 gap-4 gap-x-60">
            <ProjectStatistics/>
            <Platforms/>
            <ProjectStatistics/>
            <Platforms/>
            
        </div>
        
    </div>
  )
}

export default Home