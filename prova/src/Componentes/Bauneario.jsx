import React from "react";
import './style.css'

const Bauneario1 = props => {

    return(

            <div className="Bauneario">
                <h3> {props.origem} </h3>
                <h3> {props.destino} </h3>
                <h3> {props.preco} </h3>
                <h4 id="horarios"> {props.horasaida} </h4>
                <h4 id="horarios1"> {props.horachegada} </h4>
                <p> {props.numerovoo} </p>
                <p> {props.assentos} </p>
            </div>


    )

}

export default Bauneario1