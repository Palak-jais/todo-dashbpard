import axios from 'axios'


const baseUrl='https://todo-dashboard-backend.onrender.com';

const getAllList=(setList)=>{
     
    axios.get(baseUrl).then(({data})=>{
        //console.log('data--->',data);
        setList(data.user);
        
    })
    
   

}
const addTodo=(name,setName,setList)=>{
    axios.post(`${baseUrl}/add`,{name}).then(()=>{
        setName("");
        getAllList(setList)
        alert("added sucessfully")
    }).catch((err)=>{
        console.log(err);
    })
}
const deleteTodo=(id,setList)=>{
    axios.post(`${baseUrl}/delete`,{id}).then(()=>{
        getAllList(setList)
        alert("deleted sucessfully")
    }).catch((err)=>{
        console.log(err);
    })
}
const updateTodo=(todoid,name,setName,setList,setisUpdate)=>{
    axios.post(`${baseUrl}/update`,{id:todoid,name}).then(()=>{
        
        setName("");
        setisUpdate(false);
        getAllList(setList);
        alert("updated sucessfully")
       
      
    }).catch((err)=>{
        console.log(err);
    })
}
const doneTodo=(id,setList)=>{
    axios.post(`${baseUrl}/done`,{id}).then(()=>{
        getAllList(setList)
        alert("congratulations! completed sucessfully")
    }).catch((err)=>{
        console.log(err);
    })

}
const dragTodo=(_id,setList)=>{
    axios.post(`${baseUrl}/drag`,{_id}).then(()=>{
        getAllList(setList)
        alert("congratulations! completed sucessfully")
    }).catch((err)=>{
        console.log(err);
    })

}
export {getAllList,addTodo,deleteTodo,updateTodo,doneTodo,dragTodo}