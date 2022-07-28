import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import products from '../../utils/products.mock'

const ItemListContainer = ({section}) => {

    const [listProducts, setListProducts] = useState([])

    const getProducts = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(products)
        }, 2000)
    })

    useEffect(() => {
        getProducts
            .then( (res) => { 
                setListProducts(res)
            })
            .catch( (error) => { 
                console.log(error)
            })
    }, [])    

    // const product1 = {
    //     title: "Notebook HP",
    //     price: 150000,
    //     //image: 'notebook2.jpg',
    //     image: 'note1.jpg',
    //     stock: 2,
    //     initial: 0
    // }

    // const product2 = {
    //     title: "Notebook Asus",
    //     price: 180000,
    //     //image: 'asus.jfif',
    //     image: 'note2.jpg',
    //     stock: 3,
    //     initial: 0
    // }
    
    // const product3 = {
    //     title: "Notebook HP",
    //     price: 200000,
    //     //image: 'notebook3.jpg',
    //     image: 'note3.jpg',
    //     stock: 0,
    //     initial: 0
    // }    

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