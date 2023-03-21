import Carrusel from "../../componets/Carousel/Carrusel"
import "./Home.scss"

import presentacionUno from '../../asset/img/presentacionUno.jpg'
import presentacionDos from '../../asset/img/presentacionDos.jpg'
import presentacionTres from '../../asset/img/presentacionTres.jpg'
import presentacionCuatro from '../../asset/img/presentacionCuatro.jpg'
import presentacionCinco from '../../asset/img/presentacionCinco.jpg'
import { useContext } from "react"
import { CartContext } from "../../store/CartContext/CartContext"


const Home = () => {

    const { setCarta } = useContext(CartContext)
    setCarta(false)

    const presentacion = [presentacionUno,presentacionDos,presentacionTres,presentacionCuatro,presentacionCinco]
    return (
        <section className="home">
            <div>
                <Carrusel data={presentacion} />
            </div>
        </section>
    )
}

export default Home