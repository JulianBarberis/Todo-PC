import { Link, NavLink } from "react-router-dom";

const Categorias = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/"}> Inicio</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/categoria/1"}> Monitores</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/categoria/2"}> Componentes</Link></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#"><Link className="nav-link" to={"/categoria/3"}> Perifericos</Link></a>
            </li>
      </ul>
    );
}

export default Categorias;