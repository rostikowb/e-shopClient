import React from 'react';
import { Icon} from '@iconify/react';
import usersCog from '@iconify/icons-fa-solid/users-cog';
import {NavLink} from "react-router-dom";
import './apButt.css'


export default function Login(props) {
    return (
        <div className="iconLoginBox">
            <NavLink aria-label="Admin Panel" onClick={()=>props.func()} to="/ap">
                <Icon icon={usersCog} />
            </NavLink>

        </div>
    )
}