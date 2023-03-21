import './M&T.scss'
import { useContext } from 'react'
import { CartContext } from '../../../store/CartContext/CartContext'
import { CenaMock } from '../../../store/Mock/MockUp'
import ListarPlatos from '../ListarPlatos/ListarPlatos'
import backgroundDetalle from '../../../asset/img/backgroundDetalle.jpg'

const Tardes = () => {
    const { setCarta } = useContext(CartContext)
    setCarta(true)

    // get CenaMock

    return (
        <section className="tarde">
            <div className="tarde__container">
                <div className="tarde__container__img" >
                    <img src={backgroundDetalle} alt='detalle del fondo' />
                </div>
                <div className='tarde__container__list'>
                    {
                        CenaMock.map((seccion, indice) => {
                            return <ListarPlatos data={seccion} key={indice} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Tardes