import './ListarPlatosEditar.scss'
import veganIcon from '../../../asset/img/veganIcon.png'
import { useContext, useDebugValue, useState } from 'react'
import ReactModal from 'react-modal'
import editar from "../../../asset/img/editar.png"
import deleteIcon from "../../../asset/img/deleteIcon.png"
import cross from "../../../asset/img/cross.png"
import FormEdit from "../../FormEdit/FormEdit.js"
import { CartContext } from '../../../store/CartContext/CartContext'
const Platos = ({ plato }) => {
    // console.log('desde plato',plato)
    const { newRender ,PUBLICURL } = useContext(CartContext)
    const { nombre, precio, descripcion, vegano, id, category, bodega } = plato

    const [showModal, setShowModal] = useState(false)
    const [showModalAceptar, setShowModalAceptar] = useState(false)
    const handleSubmitAceptar = async (e) => {
        e.preventDefault()
        setShowModalAceptar(false)
        const url = PUBLICURL+`${id}`
        const response = await fetch(url, {
            method: "DELETE",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer"
        })

        // response.ok ? newRender(category) : console.error(response)
        newRender(category)

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


    return (

        <div className="plato">
            <div className="plato__precio">
                ${precio}
            </div>
            <div className="plato__text">
                <div>
                    <div>
                        {nombre} {vegano ? <img src={veganIcon} alt='icono vegano' /> : ''}
                    </div>
                    <div className="plato__descripcion">
                        {descripcion ? descripcion : ''}
                    </div>
                </div>
                <div className='plato__modal'>
                    <img onClick={() => setShowModal(true)} className="plato__text__img" src={editar} />
                    <ReactModal
                        isOpen={showModal}
                        contentLabel="Minimal Modal Example"
                        style={styleModalAceptar}
                    >
                        <div className="plato__modal__cross" >
                            <img onClick={() => setShowModal(false)} src={cross} />
                        </div>
                        <FormEdit plato={plato} setShowModal={setShowModal} />
                    </ReactModal>
                </div>
                <div className='plato__modal'>
                    <img onClick={() => setShowModalAceptar(true)} className="plato__text__img" src={deleteIcon} />
                    <ReactModal
                        isOpen={showModalAceptar}
                        contentLabel="Minimal Modal Example"
                        style={styleModalAceptar}
                    >
                        <form className='formulario' onSubmit={handleSubmitAceptar}>
                            <div>
                                <button name='cancelar' onClick={() => setShowModalAceptar(false)} >Cancelar</button>
                            </div>
                            <div>
                                <button type="submit" name='aceptar' >Aceptar</button>
                            </div>
                        </form>
                    </ReactModal>
                </div>
            </div>
        </div>
    )
}

export default Platos