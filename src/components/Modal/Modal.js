import './Modal.scss'
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';


const Modal = ({title, close, children}) => {
    return(
        <div className="modal-custom">
            <h5>{title}</h5>
            <Divider></Divider>
            <CloseIcon onClick={() => close(false)}/>
            {children}
        </div>
    )
}

export default Modal