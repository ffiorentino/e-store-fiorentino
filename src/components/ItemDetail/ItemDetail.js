import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import './ItemDetail.css'

const ItemDetail = ( {item} ) => {

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
                </div>
            </div>
        </div>
    )
}

export default ItemDetail