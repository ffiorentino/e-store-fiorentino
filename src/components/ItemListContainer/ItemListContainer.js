import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import products from '../../utils/products.mock'
import { useParams, Link } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"
//import { query, where } from "firebase/firestore";


const ItemListContainer = ({section}) => {
	const { categoryId } = useParams()
    const [listProducts, setListProducts] = useState([])

    // const getProducts = new Promise( (resolve, reject) => {
    //     setTimeout( () => {
    //         resolve(products)
    //     }, 2000)
    // })

    const getProducts = async () => {
        const productCollection = (categoryId) ? query(collection(db, 'productos'), where("category", "==", categoryId))
                                               : collection(db, 'productos')
        console.log('Collection: ', productCollection)
        const productSnapshot = await getDocs(productCollection)
        const productList = productSnapshot.docs.map( (doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    useEffect(() => {
        getProducts()
        .then((res) => {
            setListProducts(res)        
        })
    }, [categoryId])    

    //const dbQuery = categoryId ? db.collection('productos').where('category', '==', categoryId) : db.collection('productos')

    // useEffect( () => {
    //     filterByCategoryId()
    // }, [categoryId])

    // const filterByCategoryId = () => {
    //     (categoryId) ? setListProducts(products.filter(product => product.category === categoryId)) 
    //                  : setListProducts(products)
    // }    

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