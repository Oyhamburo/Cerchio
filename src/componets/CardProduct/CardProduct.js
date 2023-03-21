import { Link } from 'react-router-dom'
import './CardProduct.scss'

const CardProduct = ({ data }) => {
    let { tittle, imagen,ruta } = data
    ruta = '/menu/'+ruta
    return (
        <article className='cardProduct' >
            <h3>{tittle}</h3>
            <Link to={ruta}>
                <img src={imagen} />
            </Link>
        </article>
    )
}

export default CardProduct