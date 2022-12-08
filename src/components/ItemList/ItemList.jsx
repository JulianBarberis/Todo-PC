//MODIFICAR MI ARRAY DE OBJETOS

import Item from "../Item/Item";

const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <div className="row total">
            {productList.map(product =><Item key={product.id} producto = {product}/>)}
        </div>
    );
}

export default ItemList;