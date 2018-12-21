import React from 'react';
import style from './CharactersPage.module.css';

const charactersPage = (props) => (
    <div>
            <div className={style.textRO}>
        <p>{props.name}</p>
        <p>{props.bio}</p>
        <li>{props.job1}</li>
        <li>{props.job2}</li>
        <li>{props.job3}</li>
        <li>{props.job4}</li>
        <li>{props.job5}</li>
            </div>
    </div>
);

export default charactersPage;