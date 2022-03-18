function Item(props) {
    const { user, handleSelect } = props;
    
    return (
        <li key={user.id}>
            <span>Usuario: {user.name}</span>
            <button
                onClick={
                    () => {
                        handleSelect(user)
                    }
                }>Seleccionar</button>
        </li>
    );    
}

export default Item;
