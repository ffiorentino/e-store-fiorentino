import { useState } from 'react'
import './ItemCount.css'

const ItemCount  = ( {initial, stock, onAdd} ) => {

    //const {title, image, price, stock, initial} = data

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
                    <button
                        onClick={() => {
                            onAdd(contador)
                        }}
                        disabled={stock === 0}>
                        Agregar al Carrito
                    </button>
			    </div>
            </div>
        </div> 
    )
}

export default ItemCount