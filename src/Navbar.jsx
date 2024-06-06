import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar-container">
            <nav>
                <ul className="nav-list">
                    <li><Link to="/Home">Pagina Inicial</Link></li>
                    <li><Link to="/section1">Missão</Link></li>
                    <li><Link to="/section2">Azul Sustentável</Link></li>
                    <li><Link to="/section3">Oceano agora</Link></li>
                    <li><Link to="/section4">Seção 4</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar