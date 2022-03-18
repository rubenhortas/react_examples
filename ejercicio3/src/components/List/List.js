import Item from "../Item/Item";
import './List.css'

function List(props) {
    const getItems = () => {
        const items = props.datos.map((usuario, index) => {
            return <Item key={index} usuario={usuario} />;
        });

        return items;
    }

    return (
        <ul className='list'>
            Lista
            {getItems()}
        </ul>
    )
}

export default List;