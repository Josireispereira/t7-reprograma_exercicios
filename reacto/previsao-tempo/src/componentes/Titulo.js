import React from "react";

const Titulo = (props) => {
    return (
        <div>
            <h1 className="previsao__data">{props.data1}</h1>
            <p className="previsao__resumo">{props.resumo1}</p>
        </div>
    )
}

export default Titulo;