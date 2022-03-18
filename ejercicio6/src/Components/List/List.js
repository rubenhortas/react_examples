import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function List() {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        console.log("location");
        fetch('http://dev.contanimacion.com/api_tablon/api/mensajes', { method: "GET" })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                setData(result);
            },
                (error) => {
                    console.log('Error: ', error);
                },
            )
    }, []);

    const handleClick = (message_id) => {
        navigate("/list/" + message_id)
    }

    const getData = () => {
        const itemList = data.map((mensaje) => {
            return (
                <li key={mensaje.id}>
                    <div>
                        <Link to={"/list/" + mensaje.id}>{mensaje.asunto}</Link>
                        <span> - </span>
                        <Link to={{
                            pathName: "/list/" + mensaje.id,
                            state: { data: mensaje }
                        }}>Enviar estado</Link>
                        <button onClick={() => { handleClick(mensaje.id) }}>Ir</button>
                    </div>
                </li>
            );
        });

        return (
            <ul>
                {itemList}
            </ul>
        );
    }

    return (
        <div className="list">
            <h1>
                List
            </h1>
            {getData()}
        </div>
    );
}

export default List;