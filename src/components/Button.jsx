import React from 'react'
import './Button.css'

export default function(props) {
    return (
        <button onClick = {e => props.click && props.click(props.label)}
                className={`button 
                    ${props.tresColunas ? 'tresColunas' : ''}
                    ${props.duasColunas ? 'duasColunas' : ''}
                    ${props.operacao ? 'operacao' : ''}
                `}>
            {props.label}
        </button>
    )
}