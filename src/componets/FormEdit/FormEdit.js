import { useContext, useState } from 'react'
import { CartContext } from '../../store/CartContext/CartContext'
import './FormEdit.scss'

const FormEdit = ({ plato,setShowModal }) => {
    const { newRender } = useContext(CartContext)
    const { nombre, titulo, precio, descripcion, vegano, category,bodega } = plato
    const [stateVegano, setStateVegano] = useState(vegano)
    const [form, setForm] = useState({
        nombre,
        vegano,
        descripcion,
        precio,
        bodega: bodega ? bodega : '',
        category,
        titulo
    })
    const handleInputChange = (e) => {
        if (e.target.name == 'vegano') {
            setForm(({
                ...form,
                [e.target.name]: e.target.checked
            }))
        } else {
            setForm(({
                ...form,
                [e.target.name]: e.target.value
            }))
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setShowModal(false)
        const url = `http://localhost:8080/${plato.id}`
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
            body: JSON.stringify(form),
        })
        response.ok ? newRender(category) : console.error(response)
        
    }

    return (
        <form className='formulario' onSubmit={handleSubmit}>
            <input placeholder={nombre} type='text' onChange={handleInputChange} name='nombre' />
            <input placeholder={precio} type='number' onChange={handleInputChange} name='precio' />
            <textarea placeholder={descripcion} onChange={handleInputChange} name='descripcion' />
            <label>Vegano</label>
            <input type='checkbox' checked={stateVegano} onClick={() => setStateVegano(!stateVegano)} onChange={handleInputChange} name='vegano' />
            <button type="submit">Submit</button>
        </form>
    )
}
export default FormEdit