import React from 'react'
import './Profile.css'
const Profile = (props) => {
  return (
    <div className='divMain'>
        <div className='divHead' style={{backgroundColor:props.nameGroup.clr}}>
        
{`${props.nameGroup.title[0]}${props.nameGroup.title[1]}`}


        </div>
        <div className='divPara' >
       <h1> {props.nameGroup.title}</h1>
        </div>
    </div>
  )
}

export default Profile