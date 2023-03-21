import Platos from "./Platos"
import './ListarPlatos.scss'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../store/CartContext/CartContext"

const ListarPlatos = (props) => {
    const { titulo, platos } = props
    const { setCarta } = useContext(CartContext)
    setCarta(true)

    return (
        <div className="listarPlatos">
            <h2>
                {titulo}
            </h2>
            <div className="listarPlatos__container">
                {
                    platos.map((plato, indice) => {
                        if (plato.titulo == titulo)
                            return <Platos plato={plato} key={indice} />
                    })
                }
            </div>
        </div>
    )
}

export default ListarPlatos