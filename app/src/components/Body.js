import React from 'react';

export class Body extends React.Component{
    render () {
        return(
            <div className="body">
                <div className="list">
                    <h3>Things to do:</h3>
                    <ul id='list'>
                        <li>Eat a pizza</li>
                        <li>Learn React</li>
                        <li>Run a mile</li>
                    </ul>
                </div>
            </div>
        );
    }
}
