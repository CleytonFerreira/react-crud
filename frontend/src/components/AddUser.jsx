import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddUser() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const postData = async (e) => {
        e.preventDefault()
        let response = await axios.post(`http://localhost:3001/users`, {
            name,
            email
        })

        if (response) {
            alert("Usuário cadastrado com sucesso.")
            navigate('/home')
        } else {
            alert("Não foi possível cadastrar o usuário.")
        }
    }

    const handleCancel = () => {
        if (window.confirm('Deseja cancelar? Você perderá as alterações não salvas.')) {
            navigate("/home")
        }
    }

    return (
        <div className="container">
            <div className="new-user">
                <h1>Novo usuário</h1>
                <form className="user-form">
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={e => setName(e.target.value)}
                    >
                    </input>

                    <label>E-mail</label>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        onChange={e => setEmail(e.target.value)}
                    >
                    </input>
                    <div className="user-controls">
                        <button onClick={handleCancel}>Cancelar</button>
                        <button type="submit" onClick={postData}>Cadastrar usuário</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser