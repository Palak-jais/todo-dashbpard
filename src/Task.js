import React from 'react'

function Task({item,deleteTodo,updateTodo,doneTodo}){
    const dragStarted=(e,id)=>{
        e.dataTransfer.setData("_id",id);
    }
    
    
     return(
        <div className='item' draggable onDragStart={(e)=>dragStarted(e,item._id)}> 
        <p className='item-name'>{item.name}</p>
        <div className='info'>
        <p className='item-date'>{item.date}</p>
        <p className='item-status'>{item.status}</p>
        </div>
        <div className='btn'>
        <button className='remove-btn' onClick={deleteTodo}>REMOVE</button>
            <button className='edit-btn'onClick={updateTodo}>EDIT</button>
            <button className='done-btn' onClick={doneTodo}>DONE</button>

        </div>
       
            
        </div>

    );

}
export default Task;