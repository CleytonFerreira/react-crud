import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav className="menu">
            <ul >
                <li>
                    <Link to="/home">Usuários</Link>
                </li>
                <li>
                    <Link to="/adduser">Novo usuário</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu