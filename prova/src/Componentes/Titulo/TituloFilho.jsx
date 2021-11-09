import React from "react";

const Filho = props => {
    const callBack = props.quandoClicar
    return (
        <div>
            <button onClick={_ => callBack('Alfredo', 30, false)}>Fornecer as informações</button>
        </div>
    )
}

export default Filho