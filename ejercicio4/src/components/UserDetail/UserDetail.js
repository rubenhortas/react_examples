import { useEffect, useState } from "react";

function UserDetail(props) {
    const [seleccionados, setSeleccionados] = useState('');
    const {userData} = props;

    useEffect(() => {
        if(!userData) return;
        console.log('Se ha seleccionado el usuario ', userData.name);
        setSeleccionados(seleccionados + ', ' + userData.name);

        if(seleccionados == '') {
            setSeleccionados(userData.name);
        } else {
            setSeleccionados(seleccionados + ', ' + userData.name)
        }

    }, [userData])


    if (!userData) {
        return (
            <div className="user-detail">
            </div>
        )
    }
    else {
        return (
            <div className="user-detail">
                <div>
                    <strong>Id:</strong>
                    <span>{props.userData.id}</span>
                </div>
                <div>
                    <strong>Name:</strong>
                    <span>{props.userData.name}</span>
                </div>
                <div> Seleccionados previamente: {seleccionados} </div>
            </div>
        )
    }
}

export default UserDetail;