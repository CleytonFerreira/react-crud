import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [APIData, setAPIData] = useState([])
    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        await axios.get('http://localhost:3001/users')
            .then((res) => setAPIData(res.data))
    }

    const setData = (data) => {
        let { id, name, email } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('E-mail', email);
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`)
            .then(() => alert('Usuário removido com sucesso.'))
            .then(() => {
                getUsers();
            })
    }

    return (
        <>
            {APIData && APIData.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <Link to="/update">
                            <button onClick={() => setData(user)}>Editar</button>
                        </Link>
                        <button onClick={() => handleDelete(user.id)}>Excluir</button>
                    </div>
                )
            })}
        </>

    )
}

export default UserList