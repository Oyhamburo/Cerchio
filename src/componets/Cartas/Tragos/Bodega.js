import Platos from "../ListarPlatos/Platos"

const BodegaList = ({ bodega, platos }) => {

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

export default BodegaList