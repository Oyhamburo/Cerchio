import Platos from "./Platos"
import './ListarPlatosEditar.scss'
import { useContext, useEffect, useState } from "react"
import ReactModal from 'react-modal'
import editar from "../../../asset/img/editar.png"
import deleteIcon from "../../../asset/img/deleteIcon.png"
import cross from "../../../asset/img/cross.png"
import { CartContext } from "../../../store/CartContext/CartContext"
import FormNuevo from "../../FormNuevo/FormNuevo"
import Bodega from "../EditarTragos/Bodega"


const ListarPlatosEditar = (props) => {
    const { titulo, platos } = props
    const { newRender, bodegas, setBodegas } = useContext(CartContext)
    const [nuevoTitulo, setNuevoTitulo] = useState(titulo)
    const [showModal, setShowModal] = useState(false)
    const [showModalPlato, setShowModalPlato] = useState(false)



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
    const category = platos[0].category
    const handleInputChange = (e) => {
        setNuevoTitulo(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowModal(false)
        let data = { titulo: nuevoTitulo }
        const url = `http://localhost:8080/titulo/${titulo}`
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
        response.ok ? newRender(category) : console.error(response)
    }


    return (
        <div className="editlistarPlatos">
            <h2>
                <div>
                    {titulo}
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
                        <form className='formulario' onSubmit={handleSubmit}>
                            <input placeholder={titulo} type='text' onChange={handleInputChange} name='titulo' />
                            <button type="submit">Submit</button>
                        </form>
                    </ReactModal>
                </div>

            </h2>

            <div className="editlistarPlatos__container">
                {
                    titulo !== 'Vinos' ? (
                        platos.map((plato, indice) => {
                            if (plato.titulo == titulo) {
                                return <Platos plato={plato} key={indice} />
                            }
                        })
                    ) : (
                        // recorro las bodegas
                        // y dsp recorro los platos y los imprimo si la bodega que les paso es igual a la q posee
                        bodegas.map((bodega, indice) => {
                            return <Bodega platos={platos} bodega={bodega} key={indice} />
                        })
                    )
                }
            </div>
            <div className='edit__container__agregar__plato'>
                <button onClick={() => setShowModalPlato(true)} >Agregar plato</button>

                <ReactModal
                    isOpen={showModalPlato}
                    contentLabel="Minimal Modal Example"
                    style={styleModalAceptar}
                >
                    <div className="plato__modal__cross" >
                        <img onClick={() => setShowModalPlato(false)} src={cross} />
                    </div>
                    <FormNuevo titulo={titulo} category={category} setShowModalPlato={setShowModalPlato} />
                </ReactModal>
            </div>
        </div >
    )
}

export default ListarPlatosEditar