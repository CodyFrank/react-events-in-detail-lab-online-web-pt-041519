// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{

    constructor(props){
        super(props)
    }

    delayedClick = (event) => {
        event.persist()
        const e = event
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }

    render(){
        return(
            <div>
              <button onClick={this.delayedClick}></button>  
            </div>
        )
    }
}