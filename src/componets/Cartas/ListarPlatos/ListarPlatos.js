import Platos from "./Platos"
import './ListarPlatos.scss'
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../store/CartContext/CartContext"
import BodegaList from "../Tragos/Bodega"

const ListarPlatos = (props) => {
    const { titulo, platos } = props
    const { setCarta,bodegas } = useContext(CartContext)
    setCarta(true)
    console.log(bodegas)
    return (
        <div className="listarPlatos">
            <h2>
                {titulo}
            </h2>
            <div className="listarPlatos__container">
                {
                    titulo !== 'Vinos' ? (
                        platos.map((plato, indice) => {
                            if (plato.titulo == titulo) {
                                return <Platos plato={plato} key={indice} />
                            }
                        })
                    ) : (
                        bodegas.map((bodega, indice) => {
                            return <BodegaList platos={platos} bodega={bodega} key={indice} />
                        })
                    )
                }
            </div>
        </div>
    )
}

export default ListarPlatos