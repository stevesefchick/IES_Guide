import React from 'react';

const charactersPage = (props) => (
    <div>
        <p>{props.name}</p>
        <p>{props.bio}</p>
        <li>{props.job1}</li>
        <li>{props.job2}</li>
        <li>{props.job3}</li>
        <li>{props.job4}</li>
        <li>{props.job5}</li>
    </div>
);

export default charactersPage;