import React from 'react'
import './Display.css'

export default function(props) {
    return (
        <div className="mostrador">
            {props.valor}
        </div>
    )
}