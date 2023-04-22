import React from "react";
import {deleteTodo,doneTodo,dragTodo} from './api'
import Task from './Task';

 
function List({list,setList,setisUpdate,setName,setTodoid,loading}){
  
    const updateMode=(_id,name)=>{
        setisUpdate(true)
        setName(name)
        setTodoid(_id);
      }
      const onDragOver=(e)=>{
        e.preventDefault();
       // console.log("dragging over");
      }
      const onDropping=(e)=>{
        console.log("you have dropped");
        let id=e.dataTransfer.getData('_id');
       // console.log(id);
        dragTodo({_id:id},setList);
      
      }
      
      
    return(
      <div className="parent">
        <div className='todos'>
        <h2>ALL TODOS</h2>
        <p>Drag from Here!</p>
        
     {

      
      list.map((item) => (
        <Task item={item} setList={setList} key={item._id} 
        deleteTodo={()=>deleteTodo(item._id,setList)}
        updateTodo={()=>updateMode(item._id,item.name)}
        doneTodo={()=>doneTodo(item._id,setList)}
        />
        
      ))
     }
     </div>
     <div className="completed" draggable onDragOver={(e)=>onDragOver(e)} onDrop={(e)=>onDropping(e)}>
     <h2>COMPLETED TODOS</h2>
     <p>Drop Here!</p>
     {
      
      list.map((item) => item.status==="completed" &&(
        (
        <Task item={item} setList={setList} key={item._id} 
        deleteTodo={()=>deleteTodo(item._id,setList)}
        updateTodo={()=>updateMode(item._id,item.name)}
        doneTodo={()=>doneTodo(item._id,setList)}
        

        />
        )
        
      ))
     }
      
     </div>
     
     
     </div>
     
    )
}
export default List;