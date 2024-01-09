import { useState, useEffect } from "react"

export default function MyComponent(){
const [date, setClock] = useState(new Date());
const [count, setCount] = useState(0)

const changeCount=()=>{
    setCount((prevState)=> prevState + 1)
    document.title = `clicked ${count} time`
}

useEffect(()=>{
    document.title = `clicked ${count} time`
},[count]) // last er array ta define kore konta change hole useEffect ta call hobe

const tick = ()=>{
    setClock(new Date())
}

useEffect(()=>{
    const interval = setInterval(tick, 1000)

    return ()=>{
        clearTimeout(interval)
    } // return eta component jkhn dom theke cole jabe tkhn call hobe eta componentWillUnmount er kaj ta kore
})
    return(
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <button onClick={changeCount}>change count</button>
        </div>
    )
}