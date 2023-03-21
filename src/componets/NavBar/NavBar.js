import './NavBar.scss'
import portada from '../../asset/img/portada.jpg'
import btnNavbar from '../../asset/img/btnNavbar.png'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../store/CartContext/CartContext'

const NavBar = () => {
    const [active, setActive] = useState('false')
    const [btn, setBtn] = useState('false')
    const { carta } = useContext(CartContext)


    return (
        <section className='nav'>
            <article className='nav__portada'>
                <img src={portada} />
                <h2>L'ECCELLENZA NEI SAPORI È IL PIATTO FORTE</h2>
            </article>
            <div className='nav__btn' onClick={() => setBtn(!btn)}>
                <img src={btnNavbar} />
            </div>
            {btn ? (
                <article className='nav__mobile'>
                    <Link className='nav__mobile__link '
                        onClick={() => setActive('menu')}
                        to="/menu"
                    >
                        <span >
                            Menú
                        </span>
                    </Link>
                    <Link className='nav__mobile__link'
                        onClick={() => setActive('contacto')}
                        to="/contacto"
                    >
                        <span >
                            Contacto
                        </span>
                    </Link>
                    <a className='nav__mobile__link' href='http://book.maxibook.com.ar/index.php?horde=16719459581003230182200006379878&ref=4'
                        onClick={() => setActive('reservas')}
                    >
                        <span >
                            Reservas
                        </span>
                    </a>
                </article>
            ) : ('')
            }
            <article className='nav__bar'>
                <Link className='nav__bar__link '
                    onClick={() => setActive('menu')}
                    to="/menu"
                    style={active == 'menu' ?
                        { borderBottom: "0px solid black" } : {}}
                >
                    <span style={active == 'menu' ?
                        { borderBottom: "2px solid white" } : {}}>
                        Menú
                    </span>
                </Link>
                <Link className='nav__bar__link'
                    onClick={() => setActive('contacto')}
                    to="/contacto"
                    style={active == 'contacto' ?
                        { borderBottom: "0px solid black" } : {}}
                >
                    <span style={active == 'contacto' ?
                        { borderBottom: "2px solid white" } : {}}>
                        Contacto
                    </span>
                </Link>
                <a className='nav__bar__link' href='http://book.maxibook.com.ar/index.php?horde=16719459581003230182200006379878&ref=4'
                    onClick={() => setActive('reservas')}
                    style={active == 'reservas' ?
                        { borderBottom: "0px solid black" } : {}}
                >
                    <span style={active == 'reservas' ?
                        { borderBottom: "2px solid white" } : {}}>
                        Reservas
                    </span>
                </a>
            </article>

        </section>
    )
}

export default NavBar