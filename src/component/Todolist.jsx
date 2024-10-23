import React,{useState} from 'react'
import AddTodo from '../popup/addTask'
export default function Todolist() {
  const [todoName,setTodoName]=useState('')
  const [todoDescription,setTodoDescription]=useState('')
  const [list,setList]=useState([])
  
  const handleChange = (e)=>{
    const {name,value} = e.target
    if (name=== "todoName"){
      setTodoName(value);
    }
    else{
      setTodoDescription(value);
    }
  }

  const saveList =(listObj)=>{
    let tempList = list
    tempList.push(listObj)
    setList(tempList)
    
  }

  const handleSave = ()=>{
    let listObj = {}
    listObj["Name"]= todoName
    listObj["Description"]= todoDescription
    saveList(listObj)
    console.log(listObj)
    
  }


  return (
    <>
    <div className="header text-center">
        <h3>My Todo list</h3>
        <nav className="navbar navbar-light ">
            <div className="container-fluid ">
                <form className="inputcontainer">
                    <input className="form-control " type="text" placeholder="Todo Name" onChange={handleChange} value={todoName} name='todoName'/>
                    <input className="form-control " type="text" placeholder="Todo Description" onChange={handleChange} value={todoDescription} name='todoDescription'/>
                    <button className='btn btn-success' onClick={handleSave}>AddTodo</button>
                </form>
            </div>
        </nav>
    </div>
    <div className='todo-container'>
      {list.map((obj)=><li>{obj.Name}</li>)}
      
    </div>
    </>
  )
}
