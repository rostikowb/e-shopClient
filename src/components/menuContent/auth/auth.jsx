import React from 'react';
import {Acordeon} from '../../dopComp/acardeon/acardeon'
import {Login} from '../../dopComp/loginForm/login'

export const Auth = () => {
    return (
        <Acordeon info={{
            title: 'Авторизация',
            content: <Login/>
        }}/>
    )
};
