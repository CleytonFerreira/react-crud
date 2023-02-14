import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function UserList() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/users`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const getData = async () => {
        await axios.get(`http://localhost:3001/users`)
            .then((getData) => { setAPIData(getData.data); })
    }

    const setData = (data) => {
        let { id, name, email } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('E-mail', email);
    }

    const handleDelete = async (id) => {
        if (window.confirm('Deseja realmente excluir este usuário?')) {
            await axios.delete(`http://localhost:3001/users/${id}`)
                .then(() => alert('Usuário removido com sucesso.'))
                .then(() => { getData(); })
        }
    }

    return (
        <div className="container">
            <div className="user-list">
                <h1>Usuários</h1>

                {APIData && APIData.map((user) => {
                    return (
                        <div className="user" key={user.id}>
                            <div className="user-id">
                                <p>{user.id}</p>
                            </div>

                            <div className="user-data">
                                <p>{user.name}</p>
                                <p>{user.email}</p>
                            </div>

                            <div className="user-controls">
                                <Link to="/update">
                                    <button onClick={() => setData(user)}>Editar</button>
                                </Link>
                                <button onClick={() => handleDelete(user.id)}>Excluir</button>
                            </div>

                            <div className="bottom-line">
                                <hr />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserList