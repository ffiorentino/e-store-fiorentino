import React from 'react'
import { useState } from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

import './ItemDetail.css'

const ItemDetail = ( {item} ) => {
    const [quantitySelected, setQuantitySelected] = useState(0)

    const {id, title, image, price, stock, initial} = item;

    return (
        <div className='item-detail-product'>
            <div key={id}> 
            <img src={`/assets/${image}`} alt="Imagen producto" />
                <div>
                    <div>
                        <h3>{title}</h3>
                        <p><CreditCardIcon /> 6 Cuotas sin interes</p>
                        <p><DeliveryDiningIcon />Envio Gratis</p>                        
                        <p>${price}</p>
                    </div>
                    {
                         quantitySelected > 0 ? <button><Link to="/cart">TERMINAR COMPRA</Link></button> 
                                              : <ItemCount initial={1} stock={stock} onAdd={setQuantitySelected} />

                    }                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail