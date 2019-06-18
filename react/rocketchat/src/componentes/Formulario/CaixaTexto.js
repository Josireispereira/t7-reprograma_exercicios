import React from 'react'

export default function CaixaTexto(props){
    function valida(e){
        props.onChange(e.target.name, e.target.value)
    }

    return (
        <input
            className='campo'
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            name={props.name}
            value={props.name}
            onChange={valida} />
    )
}
{/* comentário de 
mais de uma linha */}