import { makeAutoObservable } from "mobx";
import React, { useContext,createContext } from "react";
export interface Task{
    name:string,
    completed:boolean
    id:number
}

class Store {
    txt:string = ''
    List:Array<Task>=[]  
    status:string = 'Все'
    constructor(){
        makeAutoObservable(this)
    }
    
    addTask = ():void => {
        if(this.txt==='') return

        if(!this.List.length){
            this.List.push({
                name:this.txt,
                completed:false,
                id:0
            })
            this.txt='' 
            return
        }

        this.List.push({
            name:this.txt,
            completed:false,
            id:this.List[this.List.length-1].id+1
        })

        this.txt=''
        return
    }

    handleInput = (value:string):void => {  
        this.txt=value; 
    }

    toggleComplete = (id:number) => {
        this.List.find(t => {
             if(t.id === id){
                t.completed = ! t.completed
                //console.log(this.List.map(i=>i.id))
            }
            return ''
        }) 
    }
    removeTodo = (id:number) => {
        this.List = this.List.filter(t => {
            return t.id !== id
        })
    }
    filter = (value:string) => {
        if(value==='Все') this.status='Все'
        if(value==='Выполненные') this.status='Выполненные'
        if(value==='Невыполненные') this.status='Невыполненные'
        
        return
    }
}


const StoreContext=createContext<any>(new Store())

const StoreProvider=({children}:any)=>{
    let instance = new Store()
    return <StoreContext.Provider value={instance}>{children}</StoreContext.Provider> 
}

const useStoreGlobal=()=>{
    return useContext(StoreContext)
}

export {Store,useStoreGlobal,StoreProvider}