import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({section}) => {

    const product1 = {
        title: "Notebook HP",
        price: 150000,
        image: 'notebook2.jpg',
        stock: 2,
        initial: 0
    }

    const product2 = {
        title: "Notebook Asus",
        price: 180000,
        image: 'asus.jfif',
        stock: 3,
        initial: 0
    }
    
    const product3 = {
        title: "Notebook HP",
        price: 200000,
        image: 'notebook3.jpg',
        stock: 0,
        initial: 0
    }    

	const onAdd = (cantidad) => {
        console.log('Agregar la carrito ', cantidad, ' elementos');
	}

    return(
        <div>
            <h2>{section}</h2>
            <ItemCount data={product1} onAdd={onAdd} />
            <ItemCount data={product2} onAdd={onAdd} />     
            <ItemCount data={product3} onAdd={onAdd} />               
        </div>
    )
}

export default ItemListContainer