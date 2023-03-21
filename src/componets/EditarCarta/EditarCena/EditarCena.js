import { useContext, useEffect, useState } from 'react'
import { CartContext, } from '../../../store/CartContext/CartContext'
import './EditarCena.scss'
import ListarPlatosEditar from '../ListarPlatosEditar/ListarPlatosEditar'
import logoCerchio from '../../../asset/img/logoCerchio.jpg'
import cross from '../../../asset/img/cross.png'
import editar from '../../../asset/img/editar.png'
import ReactModal from 'react-modal'
import Login from '../../Login/Login'
import { Link } from 'react-router-dom'
const EditarCena = () => {
    const { setCarta, titulos, platos, newRender, login } = useContext(CartContext)
    setCarta(true)

    const [ejecutivo, setEjecutivo] = useState(0)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        newRender('cena')
        getMenu().then((data) => {
            setEjecutivo(data.precio)
        })
    }, [])

    const getMenu = async ruta => {
        const URL = `http://localhost:8080/dia/dia`
        let menu = await fetch(URL)
        return menu.json()
    }
    const styleModalAceptar = {
        content: {
            backgroundColor: '#2c2e35',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }
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
    const handleInputChange = (e) => {
        setEjecutivo(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowModal(false)
        let data = {
            id: 'dia',
            precio: ejecutivo
        }
        const url = `http://localhost:8080/dia/dia`
        const response = await fetch(url, {
            method: "PUT",
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
        response.ok ? newRender('cena') : console.error(response)
    }

    return (
        <section className="edit">
            {login ? (
                <div className="edit__container">
                    <div className="cena__container__logo">
                        <img src={logoCerchio} alt='logo' />
                    </div>
                    <div className='cena__container__portada'>
                        <h2>Menú ejecutivo</h2>
                        <p>-----------Mediodías de martes a viernes-----------</p>
                        <h1>Plato del día & bebida</h1>
                        <span>${ejecutivo}</span>
                        <img onClick={() => setShowModal(true)} className="plato__text__img" src={editar} />
                        <ReactModal
                            isOpen={showModal}
                            contentLabel="Minimal Modal Example"
                            style={styleModalAceptar}
                        >
                            <div className="plato__modal__cross" >
                                <img onClick={() => setShowModal(false)} src={cross} />
                            </div>
                            <form className='formulario' onSubmit={handleSubmit}>
                                <input placeholder={ejecutivo} type='text' onChange={handleInputChange} name='titulo' />
                                <button type="submit">Submit</button>
                            </form>
                        </ReactModal>
                    </div>
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