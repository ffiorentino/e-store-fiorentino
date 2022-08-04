import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import products from '../../utils/products.mock'
import { useParams, Link } from "react-router-dom"


const ItemListContainer = ({section}) => {
	const { categoryId } = useParams()
    const [listProducts, setListProducts] = useState([])

    // const getProducts = new Promise( (resolve, reject) => {
    //     setTimeout( () => {
    //         resolve(products)
    //     }, 2000)
    // })

    useEffect( () => {
        filterByCategoryId()
    }, [categoryId])

    const filterByCategoryId = () => {
        (categoryId) ? setListProducts(products.filter(product => product.category === categoryId)) 
                     : setListProducts(products)
    }    

    // useEffect(() => {
    //     getProducts
    //         .then( (res) => { 
    //             setListProducts(res)
    //         })
    //         .catch( (error) => { 
    //             console.log(error)
    //         })
    // }, [])    

	const onAdd = (cantidad) => {
        console.log('Agregar la carrito ', cantidad, ' elementos');
	}

    return(
        <div>
            <h2>{section}</h2>
            {/* <ItemCount data={product1} onAdd={onAdd} />
            <ItemCount data={product2} onAdd={onAdd} />     
            <ItemCount data={product3} onAdd={onAdd} />                
            */}
            <ItemList items={listProducts} />  

        </div>
    )
}

export default ItemListContainer