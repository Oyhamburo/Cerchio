import { useContext, useState } from 'react'
import { CartContext } from '../../store/CartContext/CartContext'
import './FormNuevo.scss'

const FormNuevo = ({ setShowModalPlato, titulo, category, bodega }) => {
    const { newRender } = useContext(CartContext)
    const [stateVegano, setStateVegano] = useState(false)
    const [stateBodega, setStateBodega] = useState(false)
    const [form, setForm] = useState({
        nombre: '',
        vegano: false,
        descripcion: '',
        precio: 0,
        bodega: '',
        category,
        titulo
    })
    const sinBodega = state => {
        setStateBodega(!state)
    }
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
        setShowModalPlato(false)
        const url = `http://localhost:8080`
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
            body: JSON.stringify(form),
        })
        response.ok ? newRender(category) : console.error(response)

    }

    return (
        <form className='formulario' onSubmit={handleSubmit}>
            <input placeholder='nombre' type='text' onChange={handleInputChange} name='nombre' />
            <input placeholder='precio' type='number' onChange={handleInputChange} name='precio' />
            {titulo == 'Vinos' ? (
                <input placeholder='Bodega' type='text' onChange={handleInputChange} name='bodega' disabled={stateBodega} />
            ) : ''}
            {titulo == 'Vinos' ? (
                <label>Sin Bodega
                    <input type='checkbox' checked={stateBodega} onClick={() => setStateBodega(!stateBodega)} onChange={handleInputChange} name='bodega' />
                </label>
            ) : ''}
            <textarea placeholder='descripcion' onChange={handleInputChange} name='descripcion' />
            <label>Vegano</label>
            <input type='checkbox' checked={stateVegano} onClick={() => sinBodega(!stateVegano)} onChange={handleInputChange} name='vegano' />
            <button type="submit">Submit</button>
        </form>
    )
}
export default FormNuevo