import {useState , useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import db from '../../firebaseConfig.js'
import { collection, addDoc } from 'firebase/firestore'


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
    
    const submitData = (e) => {
        e.preventDefault()
        console.log("order para enviar: ", {...order, buyer: formData})
        pushData({...order, buyer: formData})
    }
    
    const pushData = async (newOrder) => {
        const collectionOrder = collection(db, 'ordenes')
        const orderDoc = await addDoc(collectionOrder, newOrder)
        setSuccess(orderDoc.id)
        console.log('ORDEN GENERADA', orderDoc)
    }    

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
                            <button onClick={() => setShowModal(true)}>IR A PAGAR</button>
                            <button onClick={ clear } className="btn-secondary ml-2">Limpiar Carrito</button>
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
                                <TextField
                                    label="Nombre"
                                    name='name'
                                    id="outlined-size-small"
                                    onChange={handleChange}
                                    value={formData.name}
                                    size="small"
                                />  
                                <TextField
                                    type='number'
                                    label="Telefono"
                                    name='phone'
                                    id="outlined-size-small"
                                    onChange={handleChange}
                                    value={formData.phone}
                                    size="small"
                                />
                                <TextField
                                    type='email'
                                    label="E-Mail"
                                    name='email'
                                    id="outlined-size-small"
                                    onChange={handleChange}
                                    value={formData.email}
                                    size="small"
                                />                                                                                                    
                                <button type="submit">Enviar</button>
                            </form>
                        )}
                    </Modal>
                }

                </div>               
            }
        </div>        
    )
}

export default Cart