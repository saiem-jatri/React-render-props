import { useEffect, useRef } from "react"
import Input from './Input.jsx'
export default function Form(){

const inputRef = useRef(null);

useEffect(()=>{
    inputRef.current.focus();
})

    return(
        <Input ref={inputRef} type="text" placeholder="write something" />
    )
}