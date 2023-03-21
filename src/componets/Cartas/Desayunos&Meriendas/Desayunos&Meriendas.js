import './Desayunos&Meriendas.scss'
import backgroundDetalle from '../../../asset/img/backgroundDetalle.jpg'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../store/CartContext/CartContext'
import { DesayunosMock } from '../../../store/Mock/MockUp'
import ListarPlatos from '../ListarPlatos/ListarPlatos'
import { Link } from 'react-router-dom'

const Desayunos = () => {
    const { setCarta } = useContext(CartContext)
    setCarta(true)

    const [platos, setPlatos] = useState([])
    const [titulos, setTitulos] = useState([])

    const getMenu = async () => {
        const URL = 'http://localhost:8080/desayuno'
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



    }, [])


    return (
        <section className="cena">
            <div className="cena__container">
                <div className="cena__container__img" >
                    <img src={backgroundDetalle} alt='detalle del fondo' />
                </div>
                <Link to="/menu" className='backMenu'>
                    <span >
                        Back
                    </span>
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

export default Desayunos