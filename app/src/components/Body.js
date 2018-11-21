import React from 'react';

export class Paragraph extends React.Component{
    render(){
        var text = 'This is a test';
        return(
            <p>
                {text}
            </p>
        );
    }
}

