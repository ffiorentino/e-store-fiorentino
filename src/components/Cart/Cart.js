import {useState , useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import db from '../../firebaseConfig.js'
import toast, { Toaster } from 'react-hot-toast';
import { collection, addDoc } from 'firebase/firestore'
import Button from '@mui/material/Button';



const Cart  = () => {
    const [showModal, setShowModal] = useState(false)
    const { cartProducts, clear, deleteProduct, totalProducts, sumaPrecioItems, totalPrice } = useContext(CartContext)
    const [success, setSuccess] = useState()

    const [order, setOrder] = useState({
        items: cartProducts.map((product) => {
            return {
                id: product.id,
                title: product.title,
                price: product.price
            }
        } ),
        buyer: {},
        total: totalPrice
    })
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email:''
    })   
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
    }  
    
    const isFormValid = () => {
        if (formData.name.length === 0) {
            toast.error('Para registrar la compra debe ingresar el Nombre.'); 
            return false;
        }        
        if (formData.phone.length === 0) {
            toast.error('Para registrar la compra debe ingresar el Teléfono.'); 
            return false;
        }
        if (formData.email.length === 0) {
            toast.error('Para registrar la compra debe ingresar el E-Mail.'); 
            return false;
        }   

        return true;
    }       
    
    const submitData = (e) => {
        e.preventDefault()
        if (isFormValid())
            pushData({...order, buyer: formData})
    }
    
    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        toast.success('La orden fue generada exitosamente.'); 
    }    

    return(
        <div>
            { !cartProducts.length > 0 
                ?
                <>
                    <h2>NO HAY PRODUCTOS SELECCIONADOS</h2>
                    <Link to="/" style={{ textDecoration: 'none'}}>
                         <Button variant="contained" href="#contained-buttons">
                            Ir a Comprar
                        </Button>                            
                    </Link>                      
                </>              
                :
                <div>
                    <h3>Carrito</h3> 
                  
                    {cartProducts.map(product => 
                            <div className='item-cart-product' key={product.id}>
                                <img src={`/assets/${product.image}`} alt="" />
                                <div className='cart-product__title'>
                                    <h5 style={{fontWeight: '500'}}>{product.title}</h5>
                                </div>
                                <div className='cart-product__price'>
                                    <p><b>$ {product.price}</b></p>
                                </div>   
                                <div className='cart-product__quantity'>
                                    <p><b>{product.cantidad}</b></p>
                                </div>                                                  
                                <div className='cart-product__action' >
                                    <DeleteIcon onClick={() => deleteProduct(product)}/>
                                </div>
                            </div>                   
                    )}

                    <div style={ {float: 'right'} }>
                        <h4>Total: ${sumaPrecioItems()}</h4>
                        <div>
                            <Button 
                                    variant="contained" 
                                    href="#contained-buttons"
                                    onClick={() => setShowModal(true)}
                            >
                                Pagar
                            </Button>  
                            <Button 
                                    variant="contained" 
                                    href="#contained-buttons"
                                    onClick={clear}
                                    style= { {marginLeft: '10px'} }
                            >
                                Limpiar Carrito
                            </Button>  
                        </div>  
                    </div> 

                    {showModal && 
                    <Modal title="DATOS DE CONTACTO" close={() => setShowModal()}>
                        {success ? (
                            <>
                               <h2>Su orden se genero correctamente</h2>
                               <p>ID de compra : {success}</p>
                            </>
                        ) : (
                            <form onSubmit={submitData}>
                                     <div style={{ width: '100%'}}>
                                        <TextField
                                            label="Nombre"
                                            name='name'
                                            id="standard-size-normal"
                                            //defaultValue="no"
                                            size="small"
                                            variant="standard"
                                            onChange={handleChange}
                                            value={formData.name}
                                            style={{ width: '100%'}}
                                        />
                                    </div>   
                                    <div>       
                                        <TextField
                                            type='number'
                                            label="Telefono"
                                            name='phone'
                                            id="standard-size-normal"
                                            defaultValue="Normal"
                                            variant="standard"
                                            onChange={handleChange}
                                            value={formData.phone}
                                            style={{ width: '100%'}}
                                        />
                                    </div>   
                                    <div>       
                                        <TextField
                                            type='email'
                                            label="E-Mail"
                                            name='email'
                                            id="standard-size-normal"
                                            defaultValue="Normal"
                                            variant="standard"
                                            onChange={handleChange}
                                            value={formData.email}
                                            style={{ width: '100%'}}
                                        />
                                    </div>   
                                    <div style={{ textAlign: 'right', marginTop: '10px'}}>       
                                        <button className='btn-small waves-effect waves-light' type="submit">Enviar</button>
                                    </div>                                                                     
                            </form>
                        )}
                    </Modal>
                }
                <Toaster />   
                </div>               
            }
        </div>   
  
    )
}

export default Cart