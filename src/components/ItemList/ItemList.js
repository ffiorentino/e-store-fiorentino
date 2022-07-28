import Item from "../Item/Item"

const ItemList = ({items}) => {
    return(
        <>
            {items.map( (item) => {    
                return <Item key={item.id} data={item}/>
            })}
        </>
    )
}

export default ItemList