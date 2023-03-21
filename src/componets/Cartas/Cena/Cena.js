import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../store/CartContext/CartContext'
import './Cena.scss'
import ListarPlatos from '../ListarPlatos/ListarPlatos'
import logoCerchio from '../../../asset/img/logoCerchio.jpg'
import back from '../../../asset/img/back.png'
import { Link } from 'react-router-dom'

const Cena = () => {
    const { setCarta } = useContext(CartContext)
    setCarta(true)

    const [platos, setPlatos] = useState([])
    const [titulos, setTitulos] = useState([])
    const [ejecutivo, setEjecutivo] = useState(0)

    const getMenu = async () => {
        const URL = 'http://localhost:8080/cena'
        let menu = await fetch(URL)
        return menu.json()
    }

    const getMenuDia = async () => {
        const URL = `http://localhost:8080/dia/dia`
        let menu = await fetch(URL)
        return menu.json()
    }

    useEffect(() => {
        // setLoading(true)
        getMenu().then((menu) => {
            // setLoading(false)
            setPlatos(menu)

            menu.map((plato) => {
                let titulo = false
                titulo = titulos.find(titulo => titulo === plato.titulo)
                if (!titulo) {
                    titulos.push(plato.titulo)
                    setTitulos(titulos)
                }
            })

        })
        getMenuDia().then((data) => {
            setEjecutivo(data.precio)
        })
    }, [])

    return (
        <section className="cena">
            <div className="cena__container">
                <div className="cena__container__logo">
                    <img src={logoCerchio} alt='logo' />
                </div>
                <div className='cena__container__portada'>
                    <h2>Menú ejecutivo</h2>
                    <p>-----------Mediodías de martes a viernes-----------</p>
                    <h1>Plato del día & bebida</h1>
                    <span>${ejecutivo}</span>
                </div>
                <Link to="/menu" className='backMenu'>
                    <div className="back">
                        <img src={back} alt='icono vegano' />
                        <span >
                        Volver
                    </span>
                    </div>

                </Link>
                <div className='cena__container__list'>
                    {
                        titulos.map((titulo, indice) => {
                            return <ListarPlatos titulo={titulo} platos={platos} key={indice} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Cena