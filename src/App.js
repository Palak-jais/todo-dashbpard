import React, { useEffect, useState } from 'react';
import {getAllList} from './api'
import Add from './AddTaskForm';
import Header from './Header';
import List from './TaskList';

function App() {
  const[name,setName]=useState("");
  const[list,setList]=useState([]);
  const[isUpdate,setisUpdate]=useState(false);
  const[todoid,setTodoid]=useState("");
  

  useEffect(()=>{
   
    getAllList(setList);
    
  },[])

  
  
  return (
    <div className="App">
    <Header/>
  
    <Add name={name} setName={setName} setList={setList} isUpdate={isUpdate} setisUpdate={setisUpdate} todoid={todoid} />
    <List list={list} setList={setList} setisUpdate={setisUpdate}setName={setName} setTodoid={setTodoid} />
   
     
    </div>
  );
}

export default App;
