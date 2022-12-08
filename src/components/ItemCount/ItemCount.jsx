import { useState } from "react";
const ItemCount = ({ stock }) => {
    const [contador, setContador] = useState(1);
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    const onAdd = () => {
        if (contador > 1) {
            console.log("Se agregaron " + contador + " productos")
        }
        else
            console.log("Se agregó " + contador + " producto")
    }
    return (
        <div>
            <button className="btn btn-outline-info" onClick={() => sumar()}>+</button>
            <div className="btn contador">{contador}</div>
            <button className="btn btn-outline-danger" onClick={() => restar()}>-</button>
            <button className="btn btn-outline-dark" onClick={() => onAdd()}>Agregar al carrto</button>
        </div>

    );
}

export default ItemCount;