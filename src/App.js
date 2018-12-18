import React, { Component } from 'react';
import style from './App.module.css';
import Display from './Display/Display';
class App extends Component {
    render() {
        return (
            <div className={style.mg}>

                 <Display/>
            </div>
        );
    }
}
export default App;
