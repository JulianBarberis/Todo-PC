//CONSULTAR BASE DE DATOS
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import ItemList from '../ItemList/ItemList.jsx';
import consultarBDD from '../../assets/funciones.js'
const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([]);
    const {categoria} = useParams()
    useEffect(() => {
        if(categoria){
            consultarBDD('../json/productos.json').then(products => {
                const productList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === parseInt(categoria))
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos)

            });
        }else{
            consultarBDD('./json/productos.json').then(products => {
                const productList= products.filter(prod => prod.stock > 0)
                const cardProductos = ItemList({ productList })
                setProductos(cardProductos)

            });
        }

    }, [categoria]);

    return (
        <>
            {productos}
        </>
    );
}

export default ItemListContainer;