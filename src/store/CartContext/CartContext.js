import { createContext, useState } from "react"

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [carta, setCarta] = useState(false)
    const [platos, setPlatos] = useState([])
    const [titulos, setTitulos] = useState([])
    const [login, setLogin] = useState(false)
    const [bodegas, setBodegas] = useState([])
    const arrayTest = []

    const getMenu = async ruta => {
        const URL = `http://localhost:8080/${ruta}`
        let menu = await fetch(URL)
        return menu.json()
    }

    const newRender = ruta => {
        getMenu(ruta).then((menu) => {
            // setLoading(false)
            setPlatos(menu)
            let listado = []
            menu.map((plato) => {
                let titulo = false
                titulo = listado.find(titulo => titulo === plato.titulo)
                if (!titulo) {
                    listado.push(plato.titulo)
                }
            })
            setTitulos(listado)
            let listadoBodegas = []
            menu.map((plato) => {
                if (plato.bodega) {
                    let bodega = false
                    bodega = listadoBodegas.find(bodega => bodega === plato.bodega)
                    if (!bodega) {
                        listadoBodegas.push(plato.bodega)
                    }
                }
            })
            setBodegas(listadoBodegas)
        })
    }

    const data = {
        setCarta,
        getMenu,
        platos,
        setPlatos,
        titulos,
        setTitulos,
        carta,
        newRender,
        login,
        setLogin,
        bodegas,
        setBodegas,
        arrayTest
    }
    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }