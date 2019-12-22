import React, {useState} from 'react';

const app = props => {
    const [personState, setPersons ] = useState({
        persons: [
            {name: 'Max', age: 25},
            {name: 'Manu', age: 20},
            {name: 'Steph', age: 30}
        ],
        otherState: 'some other value'
    });

    const 

    return (
        <div>
            <h1>Hey</h1>
        </div>
    )
}

export default app;