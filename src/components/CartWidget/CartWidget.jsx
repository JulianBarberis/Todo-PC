import { Link } from "react-router-dom";
import { useCarritoContext } from "../../context/CarritoContex";
import { useDarkModeContext } from "../../context/DarkModeContext";

const CartWidget = () => {
    const {darkMode} = useDarkModeContext()
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <button className={`cartWidget btn ${darkMode ? 'btn-primary' : 'btn-secondary'}`}>
                    <Link to={'/cart'} className="nav-link">
                        <i className="fas fa-shopping-cart fa-lg"></i>
                        {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
                    </Link>
                        
            </button>
            
        </>
    );
}

export default CartWidget;
