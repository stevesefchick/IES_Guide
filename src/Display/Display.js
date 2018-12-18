import React from 'react';
import style from './Display.module.css';
import CharactersPageDisplay from '../CharactersPage/CharactersPageDisplay/CharactersPageDisplay';
import Banner from '../Banner/Banner';

const display = () => (
    <div className={style.gridContainer}>
<div className={style.container}>
     <Banner/>



        <CharactersPageDisplay/>
</div>
    </div>
);

export default display;