import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../store/CartContext/CartContext'
import './Tragos.scss'
import back from '../../../asset/img/back.png'
import logoCerchio from '../../../asset/img/logoCerchio.jpg'
import ListarPlatos from '../ListarPlatos/ListarPlatos'
import backgroundDetalle from '../../../asset/img/backgroundDetalle.jpg'
import { Link } from 'react-router-dom'

const Tragos = () => {
    const { setCarta, newRender, titulos, platos } = useContext(CartContext)
    setCarta(true)


    useEffect(() => {
        newRender('tragos')
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

export default Tragos