import React from 'react';
import {NavLink} from "react-router-dom";
import './navPc.css'

export default function NavPc () {
    return(
        <nav className="navPc">
            <ul className="topmenu">
                <li><NavLink aria-label="Про нас" to="" className="down">Про нас </NavLink>
                    <ul className="submenu">
                        <li><NavLink aria-label="Статут" to="/statut">Статут</NavLink></li>
                        <li><NavLink aria-label="Структура" to="">Структура</NavLink></li>
                        <li><NavLink aria-label="Команда" to="">Команда</NavLink></li>
                    </ul>
                </li>
                <li><NavLink aria-label="Новини" to="/news" className="down">Новини</NavLink></li>
                <li><NavLink aria-label="Корисні посилання" to="/links">Корисні посилання</NavLink></li>
                <li><NavLink aria-label="Контакти" to="/contact">Контакти</NavLink></li>
            </ul>
        </nav>
    )
}