import { useContext, useEffect, useState } from 'react'
import { CartContext, } from '../../../store/CartContext/CartContext'
import './EditarCena.scss'
import { CenaMock } from '../../../store/Mock/MockUp'
import ListarPlatosEditar from '../ListarPlatosEditar/ListarPlatosEditar'
import backgroundDetalle from '../../../asset/img/backgroundDetalle.jpg'
import ReactModal from 'react-modal'
import Login from '../../Login/Login'
import { Link } from 'react-router-dom'
const EditarCena = () => {
    const { setCarta, titulos, platos, newRender, login } = useContext(CartContext)
    setCarta(true)

    useEffect(() => {
        newRender('cena')
    }, [])


    const crearNuevaSeccion = async () => {
        const data = {
            nombre: "Nuevo Plato",
            vegano: false,
            descripcion: "",
            precio: 0,
            category: "cena",
            titulo: "Nuevo Titulo"
        }
        const url = `http://localhost:8080/`
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
        })
        newRender('cena')

    }


    return (
        <section className="edit">
            {login ? (
                <div className="edit__container">
                    <Link to="/login" className='backMenu'>
                        <span >
                            Back
                        </span>
                    </Link>
                    <div className='edit__container__list'>
                        {
                            titulos.map((titulo, indice) => {
                                return <ListarPlatosEditar titulo={titulo} platos={platos} key={indice} />
                            })
                        }
                        <div className='edit__container__agregar'>
                            <button onClick={crearNuevaSeccion} >
                                Agregar una Nueva Seccion
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <Login />
            )}
        </section>
    )
}

export default EditarCena