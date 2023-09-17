import React from 'react'
import './Homepage.css'
import RightSection from '../components/rightSection/rightSection'
import LeftSection from '../components/leftSection/leftSection'
const Homepage = () => {
  return (
    <>
    <div className='main-section'>
       <div className="left-section">
        <LeftSection/>
        </div> 
       <div className="right-section">
<RightSection/>
       </div>
    </div>

    </>
  )
}

export default Homepage