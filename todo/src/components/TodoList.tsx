import { observer } from "mobx-react-lite"
import React from "react"
import { Task, useStoreGlobal } from "../store/store"
import TodoItem from "./TodoItem"

 const TodoList = observer(() => {
    const store = useStoreGlobal()
    console.log('List')
    return (
        <>
        <select name="" id="" onChange={(e)=>store.filter(e.target.value)}>
                <option value={'Все'}>Все</option>
                <option value={'Выполненные'}>Выполненные</option>
                <option value={'Невыполненные'}>Невыполненные</option>
        </select>
        <h2>{store.List.filter((i:Task) => i.completed===true).length} завершено
        из {store.List.length}</h2>        
        <ul className="list">
            {
            store.List.length > 0 && store.List.map((t:Task) => {
                if(store.status==='Все'){
                    return <TodoItem name={t.name} 
                    completed={t.completed} key={t.id}
                    id={t.id}
                    />
                }
                if(store.status==='Выполненные'){
                    if(t.completed){
                        return <TodoItem name={t.name} 
                        completed={t.completed} key={t.id}
                        id={t.id}
                        />
                    }
                    return true
                }
                if(store.status==='Невыполненные'){
                    if(!t.completed){
                        return <TodoItem name={t.name} 
                        completed={t.completed} key={t.id}
                        id={t.id}
                        />
                    }
                    return true
                }
                return true
                })
            }
        </ul>
        </>)
    
    })
export default  TodoList