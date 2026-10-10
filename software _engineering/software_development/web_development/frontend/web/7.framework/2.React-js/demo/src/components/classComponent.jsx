import React, { Component } from 'react'
import './ClassComp.css'

class ClassComponent extends Component{
    state = {
        tags:["tag1","tag2","tag3"]
    }

    renderItems(){
        if (this.state.tags.length===0) return <p>No Items</p>
        else return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

    }
    render(){
        return (
            <div className='bod'>
                <h1>Class Component</h1>
                <b>This is a class component</b>
                <div>{this.renderItems()}</div>
            </div>
        )
    }
}

export default ClassComponent;