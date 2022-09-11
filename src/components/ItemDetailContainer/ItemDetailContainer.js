import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import db from "../../firebaseConfig"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = ({section}) => {

    const [item, setItem] = useState({})
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

    return(
        <div>
            <h2>{section}</h2>
            <section>
                <ItemDetail item={item} />           
            </section>
        </div>
    )
}

export default ItemDetailContainer