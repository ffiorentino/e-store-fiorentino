import {useState , useContext} from 'react'
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';

import './CartWidget.css'

const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, clear, deleteProduct, totalProducts } = useContext(CartContext)
    
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return(
        <div className='cart-widget'>
            {cartProducts.length !== 0 && <p>{totalProducts}</p>}
            <ShoppingCart 
                style={{ color: 'white'}} 
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {cartProducts.map((product) => {
                    return(
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
                    )
                })}
                <button onClick={() => clear()} className={"btn-delete-all"}>Borrar todo</button>
            </Menu>            
        </div>
    )
}

export default CartWidget