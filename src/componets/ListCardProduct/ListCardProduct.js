import CardProduct from '../CardProduct/CardProduct'
import './ListCardProduct.scss'

const ListCardProduct = ({data}) =>{
    return (
        <>
            {data.map((menu,indice) => {
                return <CardProduct data={menu} key={indice} />
            })}
        </>
    )
}

export default ListCardProduct