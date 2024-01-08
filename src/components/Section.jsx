import Content from './Content.jsx'
import React from 'react'

export default class Section extends React.Component {
    shouldComponentUpdate(){
        return false
    }
    render(){
        return(
            <div>
                <h1>This is section</h1>
                <Content/>
            </div>
        )
    }
}
