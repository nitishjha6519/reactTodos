
import React,{useState,useEffect} from "react";
import "./../styles/App.css";
import CreateItems from "./InputArea.js"
import TodoItems from "./todo.js"

function App() 
{

const [allItems,setAllItems]=useState([])
const [selectedItem,setSelectedItem] = useState()

console.log(allItems)


function Edit(idValue,itemValue){
console.log(idValue,itemValue)
setSelectedItem({id:idValue,value:itemValue})
}

useEffect(()=>{
	if(selectedItem){
	if(selectedItem.value!=allItems[selectedItem.id]){
		setSelectedItem(null)
		allItems[selectedItem.id] = selectedItem.value
		setAllItems([...allItems])

	}
}},[selectedItem]) 



	return (
	<div id="main">


	  <CreateItems onAdd={item=>setAllItems([...allItems,item])} selected={selectedItem} setSelectedItem={setSelectedItem} />
	  {allItems.map((each,index)=>{
	  	return <TodoItems 
				key={index} 
				id={index} 
				item={each}
				onEdit={Edit}
				onDelete={(id)=>{
						setAllItems(allItems.filter((each,index)=> {
					    return index !==id
				        }))
				}} 
				 /> 
	  })}
	  
	</div>
	);
}


export default App;





























// import React,{useState} from "react";
// import "./../styles/App.css";
// import CreateItems from "./InputArea.js"
// import TodoItems from "./todo.js"

// function App() 
// {

// const [allItems,setAllItems]=useState([])

// console.log(allItems)

// function Edit(idValue,itemValue){
// console.log(idValue,itemValue)

// }

// function display(each,index){
// 	return <TodoItems 
// 	key={index} 
// 	id={index} 
// 	item={each}
// 	onEdit={Edit}
// 	onDelete={(id)=>{
// 		setAllItems(allItems.filter((each,index)=> {
// 	        return index !==id
//    }))
// 	}} 
// 	 /> 
// }

// 	return (
// 	<div id="main">
// 	  <CreateItems onAdd={item=>setAllItems([...allItems,item])}   />
// 	  {allItems.map(display)}
	   
// 	</div>
// 	);
// }


//export default App;
