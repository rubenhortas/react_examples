import { useEffect, useState } from "react";
import Item from "../Item/Item";
import UserDetail from "../UserDetail/UserDetail";

function UserList(props) {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState();

    const getData = async () => {
        const url = 'http://dev.contanimacion.com/api_tablon/api/users';
        const response = await fetch(url, { method: 'GET' })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setUsers(result);
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    useEffect(() => {
        getData();
    }, []);

    const selectUser = (user) => {
        setSelectedUser(user);
    }

    const handleSelect = (_user) => {
        setSelectedUser(_user);
    }

    const getUsers = () => {
        const userList = users.map((user) => {
            return (
                <Item 
                user={user} 
                key={user.id} 
                handleSelect={handleSelect}
                />
            )
        })

        return userList;
    }

    return (
        <div className="user-list">
            <h1>User list</h1>
            <UserDetail userData={selectedUser} />
            <ul>
                {getUsers()}
            </ul>
        </div>
    )
}

export default UserList;