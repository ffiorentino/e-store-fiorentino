import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../firebaseConfig"
import CircularProgress from '@mui/material/CircularProgress';


const ItemListContainer = ({section}) => {
    const [showCircular, setShowCircular] = useState(true);
	const { categoryId } = useParams()
    const [listProducts, setListProducts] = useState([])

    const getProducts = async () => {
        const productCollection = (categoryId) ? query(collection(db, 'productos'), where("category", "==", categoryId))
                                               : collection(db, 'productos')
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
            setShowCircular(false);   
        })
    }, [categoryId])    

    return(
        <div className='container'>
            <h4>{section}</h4>
            {showCircular && <CircularProgress> </CircularProgress>}
            <div className='main-container listProduct'>
                <ItemList items={listProducts} />  
            </div>
        </div>
    )
}

export default ItemListContainer