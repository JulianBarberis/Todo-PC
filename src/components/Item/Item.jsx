//GENERAR CARD PRODUCTO
import {Link} from "react-router-dom";


const Item = ({ producto }) => {

    return (

            <div className="card border-dark mb-3 cardProductos">
                <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
                <div className="card-body contenidoCard">

                    <h5 className="card-title">{producto.marca}</h5>
                    <p className="card-text">{producto.nombre} {producto.modelo}</p>
                    <p className="card-text">Precio =$ {new Intl.NumberFormat("de-DE").format(producto.precio)}</p>
                    <button className="btn btn-dark"><Link className="nav-link" to={`/producto/${producto.id}`}>Ver Producto</Link></button>
                </div>
            </div>
    );
}

export default Item;