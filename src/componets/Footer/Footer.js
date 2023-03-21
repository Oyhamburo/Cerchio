import './Footer.scss'
import insta from '../../asset/img/logoInstagram.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__top'>
                <div className='footer__top__left'>
                    <div>Cerchio Bar & Restó</div>
                    <div>Pedro Morán 4151</div>
                    <div>Villa devoto, CABA</div>
                </div>
                <a href='https://www.instagram.com/cerchioresto/'>
                    <img src={insta} />
                </a>
            </div>
            <div className='footer__bot'>
                <div>
                    Design by
                </div>
                <a href='https://fhdev.com.ar/'>
                    fhdev.com.ar
                </a>
            </div>


        </footer>
    )
}

export default Footer