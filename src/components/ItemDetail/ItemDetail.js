import React from 'react'
import { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

import { Link } from 'react-router-dom'

import './ItemDetail.css'

const ItemDetail = ( {item} ) => {
    const [checkout, setCheckout] = useState(false)

    const { addProductToCart } = useContext(CartContext);

    const handlerOnAdd = (cantidad) => {
        addProductToCart({ ...item, cantidad: cantidad })      
        setCheckout(true)  
    }

    const {id, title, image, price, stock} = item;

    return (
        <div className='row width-container'>
            <div className="col s6">
                <div key={id}> 
                    <img src={`/assets/${image}`} alt="Imagen producto" />
                </div>
            </div>

            <div className="col s6">
                <div>
                    <div>
                        <h3>{title}</h3>
                        <p><CreditCardIcon /> 6 Cuotas sin interes</p>
                        <p><DeliveryDiningIcon />Envio Gratis</p>                        
                        <h5><b>${price}</b></h5>
                    </div>
                    {
                         (checkout) ? <Link to="/cart" style={{ textDecoration: 'none'}}>
                                        <Button variant="contained" href="#contained-buttons">
                                            Terminar Compra
                                        </Button>   
                                      </Link> 
                                    : <ItemCount initial={1} stock={stock} onAdd={handlerOnAdd} />

                    }                    
                </div>               
            </div>            

        </div>
    )
}

export default ItemDetail