import './Desayunos&Meriendas.scss'
import backgroundDetalle from '../../../asset/img/backgroundDetalle.jpg'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../store/CartContext/CartContext'
import logoCerchio from '../../../asset/img/logoCerchio.jpg'
import back from '../../../asset/img/back.png'
import ListarPlatos from '../ListarPlatos/ListarPlatos'
import { Link } from 'react-router-dom'

const Desayunos = () => {
    const { setCarta,PUBLICURL } = useContext(CartContext)
    setCarta(true)

    const [platos, setPlatos] = useState([])
    const [titulos, setTitulos] = useState([])

    const getMenu = async () => {
        const URL = PUBLICURL+'desayuno'
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
                <div className='desayuno__top'>
                    <Link to="/menu" className='backMenu'>
                        <div className="back">
                            <img src={back} alt='icono vegano' />
                            <span >
                                Volver
                            </span>
                        </div>

                    </Link>
                    <div className="desayuno__logo" >
                        <img src={logoCerchio} alt='detalle del fondo' />
                    </div>
                </div>
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