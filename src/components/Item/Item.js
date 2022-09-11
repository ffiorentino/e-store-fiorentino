import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import './Item.scss'

const Item  = ( {data} ) => {

    const {id, title, image, price } = data

    return(
        <div className='productCard'>
            <div className="card">
                <div className="card-image">
                    <img src={`/assets/${image}`} alt="Imagen producto" />
                    <span className="card-title">$ { price }</span>
                </div>

                <div className="card-content">
                    <p>{title}</p>
                
                    <Link to={`/item/${id}`} style={{ textDecoration: 'none'}}>
                            <Button variant="contained" href="#contained-buttons">
                                Ver Detalles
                            </Button>                        
                    </Link>  
                </div>

            </div>
        </div> 
    )
}

export default Item