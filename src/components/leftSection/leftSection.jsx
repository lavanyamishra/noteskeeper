import React from 'react'
import './leftSection.css'
import MyModal from './MyModal';
import { useState } from 'react';
import Profile from './Profile';
const LeftSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupColor, setGroupColor] = useState("");
 const[groupNameSet,setGroupNameSet]=useState([])
 const[groupColorSet,setGroupColorSet]=useState([])


  
   
  
  return (
    
    <div>
      <div>
        <h1>Pocket Notes</h1>
        <button className='user-btn' onClick={() => setShowModal(true)}>+ Create Notes group</button>
        {showModal && <MyModal 
        showModal={showModal}
         setShowModal={setShowModal} 
         groupName={groupName} 
         groupColor={groupColor}
         setGroupColor={setGroupColor}
         setGroupName={setGroupName}
         groupNameSet={groupNameSet}
         groupColorSet={groupColorSet}
         setGroupNameSet={setGroupNameSet}
         setGroupColorSet={setGroupColorSet}
         />}
</div>
<div>
   {groupNameSet&&groupNameSet.map((nameGroup1,index)=>(
    <Profile
    key={index}
    nameGroup={nameGroup1} 

 
    /> 
   )
   )}
      
     
    </div>
    </div>
  )
}

export default LeftSection