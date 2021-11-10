import React, { useState } from "react"
import './App.css'
import Cartao from './Cartao/Cartao.jsx'
import Bauneario1 from "./Componentes/Bauneario"
import LasVegas from "./Componentes/LasVegas"
import LosAngeles from "./Componentes/LosAngeles"
import Moscou from "./Componentes/Moscou"
import NovaIorque from "./Componentes/NovaIorque"
import Paris from "./Componentes/Paris"
import Seul from "./Componentes/Seul"
import Toquio from "./Componentes/Toquio"
import Toronto from "./Componentes/Toronto"
import Titulo1 from "./Componentes/Titulo/Titulo"
import Lencois from "./Componentes/Lencois"

function App(props) {
    let [contador, setContador] = useState(30)
    let [contador1, setContador1] = useState(10)
    let [contador2, setContador2] = useState(20)
    let [contador3, setContador3] = useState(100)
    let [contador4, setContador4] = useState(50)
    let [contador5, setContador5] = useState(25)
    let [contador6, setContador6] = useState(20)
    let [contador7, setContador7] = useState(40)
    let [contador8, setContador8] = useState(70)
    let [contador9, setContador9] = useState(80)

    return (
        <div className="App">
            <Titulo1 texto="Big Leo Viagens" />

            <div className="Cartoes">

                <Cartao titulo="Bauneário Camburiú"
                    color='#4B4191'
                    radio={30}>
                    <Bauneario1
                        origem={"Origem: Rio de Janeiro, Brasil"}
                        destino={"Destino: Bauneário Camburiú, Brasil"}
                        preco={"Preço da passagem: R$" + 1750 + "," + 50}
                        numerovoo={"Número de voo: " + 2342}
                        horasaida={"Horário de saída: 19:20"}
                        horachegada={"Horário de chegada: 22:30"}>

                    </Bauneario1>
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Boing 747</h3>
                        <h3 className="animacao1">Airbus A340-200</h3>
                        <p>Assentos disponíveis: {contador}</p>
                        <hr />
                        <button onClick={_ => { if(contador > 0) { setContador(contador - 1) } else if (contador == 0) { setContador(contador = "Não há assentos disponíveis")}}}>Reservar assento</button>
                        <button onClick={_ => { if(contador < 30) { setContador(contador + 1)} else if(contador == "Não há assentos disponíveis"){setContador(contador = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>

                <Cartao titulo="Las Vegas"
                    color='#4B4191'
                    radio={30}>
                    <LasVegas
                        origem={"Origem: Guarulhos, Brasil"}
                        destino={"Destino: Las Vegas, Estados Unidos da América"}
                        preco={"Preço da passagem: R$" + 2900}
                        numerovoo={"Número de voo: " + 8343}
                        horasaida={"Horário de saída: 23:00"}
                        horachegada={"Horário de chegada: 10:30"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Cessna 206<br/> Stationair</h3>
                        <h3 className="animacao1">Embraer ERJ</h3>
                        <br/>
                        <p>Assentos disponíveis: {contador1}</p>
                        <hr />
                        <button onClick={_ => { if(contador1 > 0) { setContador1(contador1 - 1) } else if (contador1 == 0) { setContador1(contador1 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador1 < 10) { setContador1(contador1 + 1)} else if(contador1 == "Não há assentos disponíveis"){setContador1(contador1 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>

                <Cartao titulo="Los Angeles"
                    color='#4B4191'
                    radio={30}>
                    <LosAngeles
                        origem={"Origem: Guarulhos, Brasil"}
                        destino={"Destino: Los Angeles, Estados Unidos da América"}
                        preco={"Preço da passagem: R$" + 2000}
                        numerovoo={"Número de voo: " + 8344}
                        horasaida={"Horário de saída: 00:00"}
                        horachegada={"Horário de chegada: 11:40"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Ilyushin Il-114</h3>
                        <h3 className="animacao1">Boeing 737-900ER</h3>
                        <p>Assentos disponíveis: {contador2}</p>
                        <hr />
                        <button onClick={_ => { if(contador2 > 0) { setContador2(contador2 - 1) } else if (contador2 == 0) { setContador2(contador2 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador2 < 20) { setContador2(contador2 + 1)} else if(contador2 == "Não há assentos disponíveis"){setContador2(contador2 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>
                <Cartao titulo="Moscou"
                    color='#4B4191'
                    radio={30}>
                    <Moscou
                        origem={"Origem: Ribeirão Preto, Brasil"}
                        destino={"Destino: Moscou, Russia"}
                        preco={"Preço da passagem: R$" + 4000}
                        numerovoo={"Número de voo: " + 8345}
                        horasaida={"Horário de saída: 22:00"}
                        horachegada={"Horário de chegada: 15:30"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Boing 247</h3>
                        <h3 className="animacao1">Boeing 787-8</h3>
                        <p>Assentos disponíveis: {contador3}</p>
                        <hr />
                        <button onClick={_ => { if(contador3 > 0) { setContador3(contador3 - 1) } else if (contador3 == 0) { setContador(contador3 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador3 < 100) { setContador3(contador3 + 1)} else if(contador3 == "Não há assentos disponíveis"){setContador(contador3 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>
                <Cartao titulo="Nova Iorque"
                    color='#4B4191'
                    radio={30}>
                    <NovaIorque
                        origem={"Origem: São Paulo, Brasil"}
                        destino={"Destino: Nova Iorque, Estados Unidos da América"}
                        preco={"Preço da passagem: R$" + 1800}
                        numerovoo={"Número de voo: " + 8346}
                        horasaida={"Horário de saída: 19:00"}
                        horachegada={"Horário de chegada: 6:00"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Boing 247</h3>
                        <h3 className="animacao1">Airbus 330</h3>
                        <p>Assentos disponíveis: {contador4}</p>
                        <hr />
                        <button onClick={_ => { if(contador4 > 0) { setContador4(contador4 - 1) } else if (contador4 == 0) { setContador(contador4 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador4 < 50) { setContador4(contador4 + 1)} else if(contador4 == "Não há assentos disponíveis"){setContador(contador4 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>
                <Cartao titulo="Paris"
                    color='#4B4191'
                    radio={30}>
                    <Paris
                        origem={"Origem: Guarulhos, Brasil"}
                        destino={"Destino: Paris, França"}
                        preco={"Preço da passagem: R$" + 3500 + "," + 47}
                        numerovoo={"Número de voo: " + 8347}
                        horasaida={"Horário de saída: 18:00"}
                        horachegada={"Horário de chegada: 4:00"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Boing 247</h3>
                        <h3 className="animacao1">Bombardier CRJ700</h3>
                        <p>Assentos disponíveis: {contador5}</p>
                        <hr />
                        <button onClick={_ => { if(contador5 > 0) { setContador5(contador5 - 1)} else if (contador5 == 0) { setContador5(contador5 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador5 < 25) { setContador5(contador5 + 1)} else if(contador5 == "Não há assentos disponíveis"){setContador5(contador5 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>
                <Cartao titulo="Lençóis Maranhenses"
                    color='#4B4191'
                    radio={30}>
                    <Lencois
                        origem={"Origem: São Paulo, Brasil"}
                        destino={"Destino: Lençois Maranhenses, Brasil"}
                        preco={"Preço da passagem: R$" + 999 + "," + 49}
                        numerovoo={"Número de voo: " + 8348}
                        horasaida={"Horário de saída: 6:00"}
                        horachegada={"Horário de chegada: 9:30"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Boing 747</h3>
                        <h3 className="animacao1">Airbus A340-200</h3>
                        <p>Assentos disponíveis: {contador6}</p>
                        <hr />
                        <button onClick={_ => { if(contador6 > 0) { setContador6(contador6 - 1) } else if (contador6 == 0) { setContador6(contador6 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador6 < 20) { setContador6(contador6 + 1)} else if(contador6 == "Não há assentos disponíveis"){setContador6(contador6 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>
                <Cartao titulo="Seul"
                    color='#4B4191'
                    radio={30}>
                    <Seul
                        origem={"Origem: Guarulhos, Brasil"}
                        destino={"Destino: Seul, Coreia do Sul"}
                        preco={"Preço da passagem: R$" + 6900}
                        numerovoo={"Número de voo: " + 8349}
                        horasaida={"Horário de saída: 21:00"}
                        horachegada={"Horário de chegada: 15:30"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Boing 717</h3>
                        <h3 className="animacao1">Hawker-Siddeley Trident</h3>
                        <p>Assentos disponíveis: {contador7}</p>
                        <hr />
                        <button onClick={_ => { if(contador7 > 0) { setContador7(contador7 - 1) } else if (contador7 == 0) { setContador7(contador7 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador7 < 40) { setContador7(contador7 + 1)} else if(contador7 == "Não há assentos disponíveis"){setContador(contador7 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>
                <Cartao titulo="Toquio"
                    color='#4B4191'
                    radio={30}>
                    <Toquio
                        origem={"Origem: Rio de Janeiro, Brasil"}
                        destino={"Destino: Toquio, Japão"}
                        preco={"Preço da passagem: R$" + 5110}
                        numerovoo={"Número de voo: " + 8350}
                        horasaida={"Horário de saída: 21:00"}
                        horachegada={"Horário de chegada: 16:00"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Boing 707</h3>
                        <h3 className="animacao1">Boing 747</h3>
                        <p>Assentos disponíveis: {contador8}</p>
                        <hr />
                        <button onClick={_ => { if(contador8 > 0) { setContador8(contador8 - 1) } else if (contador8 == 0) { setContador8(contador8 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador8 < 70) { setContador8(contador8 + 1)} else if(contador8 == "Não há assentos disponíveis"){setContador8(contador8 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>
                <Cartao titulo="Toronto"
                    color='#4B4191'
                    radio={30}>
                    <Toronto
                        origem={"Origem: Guarulhos, Brasil"}
                        destino={"Destino: Toronto, Canadá"}
                        preco={"Preço da passagem: R$" + 1300}
                        numerovoo={"Número de voo: " + 8351}
                        horasaida={"Horário de saída: 00:30"}
                        horachegada={"Horário de chegada: 7:00"} />
                    <div>
                        <h2>Aviões disponíveis</h2>
                        <h3 className="animacao">Comac ARJ21</h3>
                        <h3 className="animacao1">Airbus A340-200</h3>
                        <p>Assentos disponíveis: {contador9}</p>
                        <hr />
                        <button onClick={_ => { if(contador9 > 0) { setContador9(contador9 - 1) } else if (contador9 == 0) { setContador9(contador9 = "Não há assentos disponíveis") } }}>Reservar assento</button>
                        <button onClick={_ => { if(contador9 < 80) { setContador9(contador9 + 1)} else if(contador9 == "Não há assentos disponíveis"){setContador9(contador9 = 1)}}}>Cancelar reserva</button>
                    </div>
                </Cartao>
            </div>
        </div>
    )
}

export default App
