import "./../styles/App.css";
import React,{useState} from "react";

function TodoItems(props){

 function handleDelete(){
 	props.onDelete(props.id)

 }

function handleEdit(){
 	props.onEdit(props.id,props.item)
}

	return(

        <div class="container">
       <div className="item-container">
           <p>{props.item }</p>
           
           <div id="item-btn">
           <button id="edit" onClick={handleEdit}>edit</button>
           <button id="delete" onClick={handleDelete}>Delete</button>
           </div>
           

        </div>
        </div>
		)
}

export default TodoItems;