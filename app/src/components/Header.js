import React from "react";

export class Header extends React.Component {
    render() {
        return(
            <div className="Header" id='header'>
                <h1>Eric Willroth</h1>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}
