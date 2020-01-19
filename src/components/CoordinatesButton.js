// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{

    constructor(props){
        super(props)
    }

    click = (e) => {
        const x = e.clientX
        const y = e.clientY
        this.props.onReceiveCoordinates([x, y])
    }

    render(){
        return (
            <div>
                <button onClick={this.click}></button>
            </div>  
        )
    }
}
