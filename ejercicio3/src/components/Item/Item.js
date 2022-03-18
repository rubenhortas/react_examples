import { useState } from 'react';
import './Item.css'

function Item(props) {
    const [ampliado, setAmpliado] = useState(false);

    const handleClick = () => {
        setAmpliado(!ampliado);
    }

    /*
    const getContenidoAmpliado = () => {
        if (ampliado) {
            return (
                <div>Edad: {props.usuario.edad}</div>
                )
        }
        return null;
    } 
    */

    return (
        <li className='item'>
            <h3>{props.usuario.nombre}</h3>
            <button onClick={handleClick}>Ampliar</button>
            { /* getContenidoAmpliado() */}
            {ampliado ? <div>Edad: {props.usuario.edad}</div> : null}
        </li>
    )
}

export default Item;