import './Carrusel.scss'
const ImagenCarrusel = ({ imagen }) => {
    return (
        <div>
            <img src={imagen} alt="foto comida" className="car"/>
        </div>
    )
}
export default ImagenCarrusel