import React, { Component } from 'react';

interface GreetingProps {
    name: string
}

class GreetingWithName extends Component<GreetingProps> {

    render(): JSX.Element {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
            </div>
        )
    }
}

export default GreetingWithName;
