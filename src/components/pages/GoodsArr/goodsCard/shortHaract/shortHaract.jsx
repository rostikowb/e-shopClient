import s from './shortHaract.module.css'
import React from 'react';

export const ShortHaractBox = () => {

    return (
        <div className={s.shortHaractBox}>

            <ul>
                <li>
                    <span>Діагональ екрана: </span>
                    <span>43</span>
                </li>
                <li>
                    <span>Роздільна здатність: </span>
                    <span>3840x2160</span>
                </li>
                <li>
                    <span>Діапазони цифрового тюнера: </span>
                    <span>DVB-S ¸  DVB-T2 ¸  DVB-T ¸  DVB-C</span>
                </li>
                <li>
                    <span>Smart-платформа: </span>
                    <span>Tizen</span>
                </li>
                <li>
                    <span>Частота оновлення: </span>
                    <span>1300 Гц (PQI)</span>
                </li>
            </ul>

        </div>
    );
};