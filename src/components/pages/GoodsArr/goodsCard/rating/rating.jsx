import s from './rating.module.css'
import React from 'react';
import Rating from '@material-ui/lab/Rating';

export const RatingBox = () => {
    const value = 4;
    return (
        <div className={s.ratingBox}>
            <Rating name="read-only" value={value} size={"small"} readOnly/>
            <a> - 2 ляма</a>
        </div>
    );
};