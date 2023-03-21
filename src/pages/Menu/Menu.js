import ListCardProduct from '../../componets/ListCardProduct/ListCardProduct'
import './Menu.scss'
import menuTarde from '../../asset/img/menuTarde.jpg'
import menuTragos from '../../asset/img/menuTragos.jpg'
import menuCena from '../../asset/img/menuCena.jpg'
import menuAlmuerzo from '../../asset/img/menuAlmuerzo.jpg'
import { useContext } from 'react'
import { CartContext } from '../../store/CartContext/CartContext'
// import { useParams } from 'react-router-dom'

const Menu = () => {
    const { setCarta } = useContext(CartContext)
    setCarta(false)
    // const { category } = useParams();
    const menus = [{
        imagen: menuTarde,
        tittle: 'MAÑANAS y TARDES',
        ruta: 'desayunosYmeriendas'
    },
    {
        imagen: menuAlmuerzo,
        tittle: 'ALMUERZO',
        ruta: 'almuerzo'
    },
    {
        imagen: menuCena,
        tittle: 'CENA',
        ruta: 'cena'
    },
    {
        imagen: menuTragos,
        tittle: 'CARTA DE VINOS & COCKTAILS',
        ruta: 'tragos'
    }]


    return (
        <section className='menu'>
            <div>
                <ListCardProduct data={menus} />
            </div>
        </section>
    )
}

export default Menu