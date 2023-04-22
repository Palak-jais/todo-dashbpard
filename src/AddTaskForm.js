import React from "react";
import { addTodo,updateTodo } from "./api";

function Add({name,setName,setList,isUpdate,setisUpdate,todoid}){
 
    return(
        <div className="add">
        
            <input type="text"  placeholder="Enter todo"  value={name} 
                onChange={(e)=>{setName(e.target.value)}}
            />
              <span onClick={isUpdate? ()=>updateTodo(todoid,name,setName,setList,setisUpdate):()=>addTodo(name,setName,setList)}>{isUpdate?"UPDATE":"ADD"}</span>
           
        </div>

    )
   
}
export default Add;