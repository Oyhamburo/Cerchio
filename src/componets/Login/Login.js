import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../store/CartContext/CartContext'
import './Login.scss'

const Login = () => {
    const { setCarta,setLogin,login } = useContext(CartContext)
    setCarta(false)
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const handleInputChange = (e) => {
        setForm(({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { username, password } = form
        const url = `http://localhost:8080/login/${username}/${password}`
        const response = await fetch(url, {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer"
        })
        response.ok ? setLogin(true) : setLogin(false)
    }

    return (
        <section className='login'>
            {!login ? (
                <div className='login__container'>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                Nombre Usuario
                            </label>
                            <input type='text' name='username' onChange={handleInputChange} />
                        </div>
                        <div>
                            <label>
                                Contraseña
                            </label>
                            <input type='password' name='password' onChange={handleInputChange} />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <div className='login__menu'>
                    <Link className='login__menu__link ' to="/login/desayuno">
                        <span >
                            Desayunos y Meriendas
                        </span>
                    </Link>
                    <Link className='login__menu__link ' to="/login/cena">
                        <span >
                            Almuerzo y Cena
                        </span>
                    </Link>
                    <Link className='login__menu__link ' to="/login/tragos">
                        <span >
                            Tragos
                        </span>
                    </Link>
                </div>
            )}
        </section>
    )
}

export default Login
