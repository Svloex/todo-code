import { observer } from "mobx-react-lite"
import React from "react"
import { useStoreGlobal } from "../store/store"

 const InputField = observer(() => {
    const store = useStoreGlobal()
    return  (
        <div className="input">
            <input type="text" value={store.txt} onChange={(e) => store.handleInput(e.target.value)} />
            <button onClick={store.addTask}>Add Todo</button>
        </div>
    )

})
export default InputField