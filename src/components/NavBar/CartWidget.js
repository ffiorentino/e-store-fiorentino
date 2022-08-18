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
        </div>
    )
}

export default CartWidget