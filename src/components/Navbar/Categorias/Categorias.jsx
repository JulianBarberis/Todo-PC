import { Link, NavLink } from "react-router-dom";

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item navbarTitle">
                <a className="nav" href="#"><Link className="nav-link" to={"/"}> Todo PC</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/"}> Inicio</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/category/1"}> Monitores</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/category/2"}> Componentes</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/category/3"}> Perifericos</Link></a>
            </li>
      </ul>
    );
}

export default Categorias;