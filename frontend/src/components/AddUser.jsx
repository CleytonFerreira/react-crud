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

    return (
        <form>
            <input
                type="text"
                placeholder="Digite seu primeiro nome"
                onChange={e => setName(e.target.value)}
            >
            </input>

            <input
                type="email"
                placeholder="Digite seu email"
                onChange={e => setEmail(e.target.value)}
            >
            </input>

            <button type="submit" onClick={postData}>Adicionar usuário</button>
        </form>
    )
}

export default AddUser