import React from 'react'
import Instagram from './Instagram.png'
import Twitter from './Twitter.png'
import WhatsApp from './WhatsApp.png'
import Facebook from './Facebook.png'


import './Titulo.css'

export default function Titulo1(props) {
    return (
        

        <div className="Titulo1">
            <div><h2> {props.texto}</h2></div>

            <nav id="social">


                <ul>
                    <li>
                        <a href="#">
                            <img className="logo" src={Instagram}/>
                            <span>/bigleo.viagens</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="logo" src={Facebook}/>
                            <span>/bigleo.viagens</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="logo" src={WhatsApp}/>
                            <span>(16) 98395-4321</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="logo" src={Twitter}/>
                            <span>@BigLeoViagens</span>
                        </a>
                    </li>
                </ul>
            </nav>



        </div>
    )
}