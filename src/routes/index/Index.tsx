import React from 'react';
import css from './Index.module.css';

function Index() {
    return (
        <div className={css.main}>
            <h1>Hey there! 👋</h1>
            <h2>This is the react typescript template by <a href="https://github.com/choozn">@choozn</a></h2>
        </div>
    );
}

export default Index;