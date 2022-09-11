import { useState } from 'react'
import Button from '@mui/material/Button';
import './ItemCount.css'

const ItemCount  = ( {initial, stock, onAdd} ) => {

    const addNumber = () => {
        if (contador < stock)
            setContador(contador + 1)
    }
    const removeNumber = () => {
        if (contador > 1)
            setContador(contador - 1)
    }    

    const[contador, setContador] = useState(initial);

    return(
        <div className='item-product'>
            <div className='detail-product'>
                <div className='countProd'>
                    <button 
                        onClick={removeNumber}
                        disabled={stock===0}
                    >-</button>
                    <p>{contador}</p>
                    <button 
                        onClick={addNumber}
                        disabled={stock===0}
                    >+</button>
                </div>
                <div className='addCarrito'>
                    <Button variant="contained" 
                            href="#contained-buttons"
                            onClick={() => {onAdd(contador)}}
                            disabled={stock === 0}
                    >
                        Agregar al Carrito
                    </Button>                        
			    </div>
            </div>
        </div> 
    )
}

export default ItemCount