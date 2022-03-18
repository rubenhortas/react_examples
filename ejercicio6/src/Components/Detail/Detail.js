import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function Detail() {
    const params = useParams();
    const location = useLocation();

    const url = 'http://dev.contanimacion.com/api_tablon/api/mensajes/get/' + params.id;
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!location.state) {
            fetch(url, { method: "GET" })
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    setData(result);
                },
                    (error) => {
                        console.log('Error: ', error);
                    },
                )
        } else {
            setData(location.state);
        }
    }, []);

    return (
        <div className="detail">
            <h1>
                Detail
            </h1>
            <div>
                <strong>ID:</strong> {data.id}
            </div>
            <div>
                <strong>Asunto:</strong> {data.asunto}
            </div>
            <div>
                <strong>Mensaje:</strong> {data.mensaje}
            </div>
            <div>
                <strong>Id:</strong> {data.user_id}
            </div>
        </div>
    );
}

export default Detail;