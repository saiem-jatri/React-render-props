import { useState } from 'react';
import MyComponent from './components/useEffect/MyComponent.jsx'
import Form from './components/useRef/Form.jsx'
import Reducer from './components/useReducer/Reducer.jsx'
export default function App() {
const [show, setShow] = useState(true)

        return (
          <div className="app">
            <Reducer/>
            <Form/>
             <div>{show && <MyComponent />}</div>

             <button onClick={()=> setShow((prevShow)=> prevShow = !prevShow)}>
                {show ? 'close' : 'open'}
             </button>
          </div>
        )
    }

