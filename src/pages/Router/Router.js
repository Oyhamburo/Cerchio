import NavBar from '../../componets/NavBar/NavBar';
import Footer from '../../componets/Footer/Footer';
import Menu from '../Menu/Menu';
import Map from '../Map/Map';
import Home from '../Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../store/CartContext/CartContext';
// import Carta from '../../componets/Carta/Carta';
import Cena from '../../componets/Cartas/Cena/Cena';
import Desayunos from '../../componets/Cartas/Desayunos&Meriendas/Desayunos&Meriendas';
import Tragos from '../../componets/Cartas/Tragos/Tragos';
import Tardes from '../../componets/Cartas/Manianas&Tardes/M&T';
import EditarCena from '../../componets/EditarCarta/EditarCena/EditarCena';
import Login from '../../componets/Login/Login.js'
import EditarDesayuno from '../../componets/EditarCarta/EditarDesayuno/EditarDesayuno';
import EditarTragos from '../../componets/EditarCarta/EditarTragos/EditarTragos';

const Router = () => {
    const { carta } = useContext(CartContext)
    return (
        <BrowserRouter>
            <main className='main'>
                {!carta ? <NavBar /> : ''}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/menu/almuerzo' element={<Cena />} />
                    <Route path='/menu/cena' element={<Cena />} />
                    <Route path='/menu/tragos' element={<Tragos />} />
                    <Route path='/menu/desayunosYmeriendas' element={<Desayunos />} />
                    <Route path='/contacto' element={<Map />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/login/cena' element={<EditarCena />} />
                    <Route path='/login/desayuno' element={<EditarDesayuno />} />
                    <Route path='/login/tragos' element={<EditarTragos />} />
                </Routes>
                {!carta ? <Footer /> : ''}
            </main>
        </BrowserRouter>
    )
}

export default Router