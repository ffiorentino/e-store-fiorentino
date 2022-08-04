import {Link} from 'react-router-dom'
import './Item.css'

const Item  = ( {data} ) => {

    const {id, title, image, price, stock, initial} = data

    return(
        <div className='item-product'>
            <img src={`/assets/${image}`} alt="Imagen producto" />
            <div className='detail-product'>
                <p>{title}</p>
                <span>$ {price}</span>
                <div className='addCarrito'>
                    <Link to={`/item/${id}`}>
                        <button>Ver detalles</button>
                    </Link>                    
			    </div>
                <div className='countProd'>
                    <p>Stock disponible: {stock}</p>
                </div>                
            </div>
        </div> 
    )
}

export default Item