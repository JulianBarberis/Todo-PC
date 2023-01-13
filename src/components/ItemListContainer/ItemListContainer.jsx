import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx';
import {cargarBDD, getProductos, getProducto, updateProducto, deleteProducto } from '../../assets/firebase.js';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams()

    useEffect(() => {
            if(category) {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(category))
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            } else {
                getProductos().then(products => {
                    const productsList= products.filter(prod => prod.stock > 0)
                    const cardProductos = ItemList({productsList})
                    setProductos(cardProductos)
                })
            }
        // "6PaN8Zd8FktkPHBrEy6b"
        // cargarBDD().then(productos => console.log(productos))
        // getProductos().then(productos => console.log(productos))
        // getProducto("9gKnlmAynltKBqzRUhjn").then(prod => console.log(prod))

        // getProducto("x9L1AJ1dK9CKTFVD62y7").then(prod =>{
        //     prod.stock-=5
        //     delete prod.id
        //     updateProducto(prod.id,prod).then(estado =>console.log(estado))
        // })

    },[category]);

    return (
        <div className= 'row cardProductos ' >
            {productos}
        </div>

    );
}



export default ItemListContainer;
