import { useContext } from 'react'
import { CartContext } from '../../store/CartContext/CartContext'
import './Map.scss'

const Map = () =>{

    const {setCarta} = useContext(CartContext)
    setCarta(false)

    return(
        <section className='map'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3284.090776086445!2d-58.511661000000004!3d-34.601866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7cc55e3e789%3A0xfc509ee9f71ec531!2sPedro%20Mor%C3%A1n%204151%2C%20C1419HLA%20CABA!5e0!3m2!1ses-419!2sar!4v1679010356483!5m2!1ses-419!2sar"
            width="600" 
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    )
}

export default Map