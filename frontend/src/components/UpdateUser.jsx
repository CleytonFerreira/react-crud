import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function UpdateUser() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setID] = useState(null);

    const updateAPIData = async (e) => {
        e.preventDefault()
        let response = await axios.put(`http://localhost:3001/users/${id}`, {
            name,
            email,
        })

        if (response) {
            alert("As alterações foram salvas.")
            navigate("/home")
        }
        else {
            alert("Houve um erro na atualização dos dados.")
        }
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('E-mail'));
    }, []);

    const handleCancel = () => {
        if (window.confirm('Deseja cancelar? Você perderá as alterações não salvas.')) {
            navigate("/home")
        }
    }

    return (
        <div className="container">
            <div className="update-user">
                <h1>Editar usuário</h1>
                <form className="user-form">
                    <label>Nome</label>
                    <input
                        placeholder='Digite seu nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Email</label>
                    <input placeholder='Digite seu e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="user-controls">
                        <button onClick={handleCancel}>Cancelar</button>
                        <button type='submit' onClick={updateAPIData}>Salvar alterações</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser