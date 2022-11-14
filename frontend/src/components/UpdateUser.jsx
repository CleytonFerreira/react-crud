import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Update() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [id, setID] = useState(null);

    const updateAPIData = async (e) => {
        e.preventDefault();
        let response = await axios.put(`http://localhost:3001/users/${id}`, {
            name,
            email,
        }).then(
            navigate("/home")
        )
    
        if (response) {
            alert("As alterações foram salvas.")
        }
        else {
            alert("Houve um erro na atualização dos dados.")
        }
    }

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setEmail(localStorage.getItem('Email'));
    }, []);

    return (
        <form className="edit-user-form">
            <label>Nome</label>
            <input
                placeholder='Digite seu nome'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label>E-mail</label>
            <input
                placeholder='Digite seu e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type='submit' onClick={updateAPIData}>Salvar alterações</button>
        </form>
    )
}