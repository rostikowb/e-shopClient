import React from 'react';
import {NavLink} from "react-router-dom";
import './info.css';


export default function Logo() {
    return (
        <ul>
            <li><NavLink aria-label="Контакты" to="/contacts">Контакты</NavLink></li>
            <li><NavLink aria-label="QA" to="/qa">Ответы на частые вопросы</NavLink></li>
        </ul>
    )
}