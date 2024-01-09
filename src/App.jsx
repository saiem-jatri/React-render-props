import { useState } from 'react';
import MyComponent from './components/useEffect/MyComponent.jsx'
export default function App() {
const [show, setShow] = useState(true)

        return (
          <div className="app">
             <div>{show && <MyComponent />}</div>

             <button onClick={()=> setShow((prevShow)=> prevShow = !prevShow)}>
                {show ? 'close' : 'open'}
             </button>
          </div>
        )
    }

