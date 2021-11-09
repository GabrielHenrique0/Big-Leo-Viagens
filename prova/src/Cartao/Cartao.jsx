import React from "react"
import './Cartao.css'
import R from '../Componentes/R.gif'

const Cartao = props => {
    let estilo = {
        backgroundColor: props.color || '#AC0',
        borderColor: props.color || '#AC0',
        borderRadius: props.radio || 10
    }
    return (
        <div className="Cartao" style = {estilo}>
            <div className="Titulo">{props.titulo}<img id="aviao" alt="Gif de um avião em desenho" src={R}/></div>
            <div className="Conteudo">{props.children}</div>
        </div>
    )
}

export default Cartao