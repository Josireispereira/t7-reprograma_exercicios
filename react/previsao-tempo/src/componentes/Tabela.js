import React from "react";

const Tabela = (props) => {
    return (
        <div>
            <table className="previsao-temperatura">
                <tr className="previsao-temperatura__linha">
                    <th>Máxima</th>
                    <td>{props.temperatura.max}</td>
                </tr>
                <tr className="previsao-temperatura__linha">
                    <th>Mínima</th>
                    <td>{props.temperatura.min}</td>
                </tr>
            </table>
        </div>
    )
}

export default Tabela;