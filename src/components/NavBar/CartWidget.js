import {useState , useContext} from 'react'
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CartContext } from '../../context/CartContext';

import './CartWidget.css'

const CartWidget = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const { cartProducts, totalProducts } = useContext(CartContext)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return(
        <div className='cart-widget'>
            { 
                cartProducts.length > 0 
                ? 
                <p>{totalProducts}</p>
                : ""
            }
            <ShoppingCart 
                style={{ color: 'white'}} 
                onClick={handleClick}
            />
        </div>
    )
}

export default CartWidget