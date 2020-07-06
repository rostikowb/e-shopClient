import React from 'react';
import s from './sort.module.css'

export const Sort = () => {
    return (
            <div className={s.selects}>
                <span>Отсортировать по: </span>
                <select name="Сортировка" id="sortSelect">
                    <option value="random">Стандарту</option>
                    <option value="priceMinMax">Цена: min-max</option>
                    <option value="priceMaxMin">Цена: max-min</option>
                    <option value="byRating">По рейтингу</option>
                    <option value="byDate">По дате поступления</option>
                </select>
            </div>
    );
};