import { Task,useStoreGlobal } from "../store/store";
import { observer } from "mobx-react-lite"
import React from 'react';
const TodoItem = observer(({name,completed,id}:Task)=>{
    const store = useStoreGlobal()
    return( 
        <>
        <li className="list__items">
            <span>{id}</span>
            <input type="checkbox" checked={completed}
             onChange={() => store.toggleComplete(id)}/>
            <span>{name}</span> 
            <span className='delete' onClick={()=>store.removeTodo(id)}>&times;</span> 
        </li>
        </>
    )
    
})
export default TodoItem