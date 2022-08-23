import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
//import product from '../../utils/product.mock'
import products from '../../utils/products.mock'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom"
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = ({section}) => {

    const [item, setItem] = useState({})
    //const [loading, setLoading] = useState(false);
    const { id } = useParams()


    useEffect( () => {
        getProduct()
        .then((res) => {
            setItem(res)
        })
    }, [id])

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }    

    // const getItem = new Promise( (resolve, reject) => {
    //     setTimeout( () => {
    //         resolve(product)
    //     }, 2000)
    // })

    // useEffect(() => {
    //     getItem
    //         .then( (res) => { 
    //             setItem(res)                   
    //         })
    //         .catch( (error) => { 
    //             console.log(error)
    //         })
    //         .finally( () => {
    //             setLoading(false)
    //         })
    // }, [])   
    
    // useEffect( () => {
    //     filterById()
    // }, [id])

    // const filterById = () => {
    //     products.some( (product) => {
    //         if(product.id == id) {
    //             setItem(product) 
    //         }
    //     }
    //     )
    // }    


    return(
        <div>
            <h2>{section}</h2>
            {/* { loading ? <CircularProgress /> : <ItemDetail item={item} /> }            */}
            <ItemDetail item={item} />           
        </div>
    )
}

export default ItemDetailContainer