import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../store/CartContext/CartContext"
import Platos from "../ListarPlatosEditar/Platos"

const Bodega = ({ bodega }) => {
    const { platos } = useContext(CartContext)

    return (
        <div>
            <div>
                {bodega !== 'on' ? bodega : ''}
            </div>
            {platos.map((plato, indice) => {
                if (plato.bodega) {
                    if (plato.bodega == bodega) {
                        return <Platos plato={plato} key={indice} />
                    }
                }
                
            })}
        </div>
    )
}
export default Bodega