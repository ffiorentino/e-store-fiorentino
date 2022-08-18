import {useState , useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'


const Cart  = () => {

    const { cartProducts, clear, deleteProduct, totalProducts, sumaPrecioItems } = useContext(CartContext)

    return(
        <div>
            { !cartProducts.length > 0 
                ?
                <>
                    <h1>NO HAY PRODUCTOS SELECCIONADOS</h1>
                    <Link to="/">
                        <button>Ir a Comprar</button>
                    </Link>                    
                </>              
                :
                <div>
                    <h3>Carrito</h3> 
                  
                    {cartProducts.map(product => 
                            <div className='item-cart-product' key={product.id}>
                                <img src={`/assets/${product.image}`} alt="" />
                                <div className='cart-product__title'>
                                    <p>{product.title}</p>
                                </div>
                                <div className='cart-product__price'>
                                    <p>$ {product.price}</p>
                                </div>   
                                <div className='cart-product__quantity'>
                                    <p>{product.cantidad}</p>
                                </div>                                                  
                                <div className='cart-product__action' >
                                    <DeleteIcon onClick={() => deleteProduct(product)}/>
                                </div>
                            </div>                   
                    )}

                    <div>
                        <h4>Total: ${sumaPrecioItems()}</h4>
                        <div>
                            <Link to='/checkout'>
                                <button className="btn-primary">Check-Out</button>
                            </Link>
                            <button onClick={ clear } className="btn-secondary ml-2">Limpiar Carrito</button>
                        </div>  
                    </div> 

                </div>               
            }
        </div>
    )
}

export default Cart