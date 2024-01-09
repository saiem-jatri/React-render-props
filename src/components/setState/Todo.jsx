/* eslint-disable no-const-assign */
import { useState } from "react";

export default function Todo(){
    const [title, setTitle] = useState('')
    const [warning, setWarning] = useState('')
    let handleChange = (e)=>{
        const inputValue = e.target.value
        const updateWrning = inputValue.includes('.js')
       ? 'You need JavaScript skill to complete the task. Do you have it?'
       : null;
        setTitle(inputValue)
        setWarning(updateWrning)
    }
    return(
        <div>
            <input type="text" value={title} onChange={handleChange} />
            <p>{warning || 'Good choice'}</p>
        </div>
    )
}