import './ListarPlatos.scss'
import veganIcon from '../../../asset/img/veganIcon.png'
const Platos = ({ plato }) => {
    // console.log('desde plato',plato)
    const { nombre, precio, descripcion, vegano } = plato

    return (
        <div className="plato">
            <div className="plato__precio">${precio}</div>
            <div>
                <div className="plato__nombre">
                    {nombre} {vegano ? <img src={veganIcon} alt='icono vegano' /> : ''}
                </div>
                <div className="plato__descripcion">
                    {descripcion ? descripcion : ''}
                </div>
            </div>
        </div>
    )
}

export default Platos