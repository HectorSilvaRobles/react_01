import React from 'react';
import './persons.css'

const Person = (props) => {
    return (
        <div className='person'>
        <p>{props.children}</p>
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
        <input type='text' onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Person;