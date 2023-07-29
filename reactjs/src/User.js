import React, { Component } from 'react'

export default class extends Component {
    constructor() {
        super();
        this.state = {
            data:"darshan"
        }
    }

    apple()
        {
            this.setState({
                data:"apple"})
        }
    
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>update data</button>
            </div>
        )
    }
}

