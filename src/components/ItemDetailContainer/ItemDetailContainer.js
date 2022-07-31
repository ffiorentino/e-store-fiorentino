import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import product from '../../utils/product.mock'
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailContainer = ({section}) => {

    const [item, setItem] = useState('')
    const [loading, setLoading] = useState(true);

    const getItem = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(product)
        }, 2000)
    })

    useEffect(() => {
        getItem
            .then( (res) => { 
                setItem(res)                   
            })
            .catch( (error) => { 
                console.log(error)
            })
            .finally( () => {
                setLoading(false)
            })
    }, [])     


    return(
        <div>
            <h2>{section}</h2>
            { loading ? <CircularProgress /> : <ItemDetail item={item} /> }           
        </div>
    )
}

export default ItemDetailContainer