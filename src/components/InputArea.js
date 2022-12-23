import React,{useState,useEffect} from "react";
import "../styles/App.css"

function CreateItems(props){
const [item,setItem]=useState("")
const [toggle,setToggle] = useState(true)
    const [errors, setErrors] = useState("")



 

useEffect(()=>{
       if(props.selected){
        setItem(props.selected.value)
        console.log("Toggle is becoming true")
        setToggle(true)
    }
},[props.selected])

const handleSave=()=>{

       if(item==""){
        console.log("error")
         setErrors("Cannot be blank")
       }else{
        setErrors("")

    props.setSelectedItem({...props.selected,value:item})
    setToggle(false)
       }

}

	return(
     <>

  <div className="inp">
  <div className="item-container">
           <input  type="text"
             value={item}
             placeholder="Type here..."
             onChange={(e)=>setItem(e.target.value)}
             />
             
             {props.selected && toggle?<button id="btn" onClick={handleSave}>Save</button>:<button id="btn" onClick={()=>{
              if(item==""){
               console.log("error")
                setErrors("Cannot be blank")
              }else{
               props.onAdd(item)
              setItem("")
               setErrors("")
              }
             }}>Add</button>}
             </div>
             <p className={errors ? "red" : "hidden"}>{errors} </p>
                
     
 
  </div>
     
  

     </>
		)
}

export default CreateItems;