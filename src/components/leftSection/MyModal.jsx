
import { useEffect,useState } from "react";
import './MyModal.css'

const MyModal = (props) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

const[color,setColor]=useState("");
  const closeModal = () => props.setShowModal(false);
  
const obj={
  clr:color,
  title:props.groupName
}




  const handleGroupColor = (e) => {
    props.setGroupColor(e.target.value);
    setColor(props.groupColor)
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(props.groupName)
    console.log(props.groupColor)
props.setGroupNameSet([...props.groupNameSet,obj])
props.setGroupColorSet([...props.groupColorSet,props.groupColor])
  
    closeModal()

  }


  return(
    <>
      <div className="modal_wrapper" onClick={closeModal}></div>
      <div className="modal_container">
      <h3>Create New Notes group</h3>
      <form>
          <div className="group_name">
            <p>Group Name</p>
            <input
              type="text"
              placeholder="Enter your group name..."
              value={props.groupName}
              onChange={(e) => props.setGroupName(e.target.value)}
            />
          </div>
          <div className="choose_color">
            <p>Choose Color</p>
            <div className="radio_btn">
              <input
                type="radio"
                name="radio"
                value="#b38bfa"
                onClick={handleGroupColor}
                checked={props.groupColor === "#b38bfa"}
              />
              <input
                type="radio"
                name="radio"
                value="#ff79f2"
                onClick={handleGroupColor}
                checked={props.groupColor === "#ff79f2"}
              />
              <input
                type="radio"
                name="radio"
                value="#43e6fc"
                onClick={handleGroupColor}
                checked={props.groupColor === "#43e6fc"}
              />
              <input
                type="radio"
                name="radio"
                value="#f19576"
                onClick={handleGroupColor}
                checked={props.groupColor === "#f19576"}
              />
              <input
                type="radio"
                name="radio"
                value="#0047ff"
                onClick={handleGroupColor}
                checked={props.groupColor === "#0047ff"}
              />
              <input
                type="radio"
                name="radio"
                value="#6691ff"
                onClick={handleGroupColor}
                checked={props.groupColor === "#6691ff"}
              />
            </div>
          </div>
          <div onClick={closeModal}>
            <button onClick={handleSubmit} className="create_btn">
              Create
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MyModal;