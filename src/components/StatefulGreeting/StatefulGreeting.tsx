import React, { Component } from 'react';

interface GreetingProps {
    name: string;
}

interface GreetingState {
    name: string
}

class StatefulGreeting extends Component<GreetingProps, GreetingState> {
    constructor(props: Readonly<GreetingProps>) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    render(): JSX.Element {
        return (
            <div>
                <h1>Hello {this.state.name}! Your name is stored in this component's state.</h1>
            </div>
        )
    }
}

export default StatefulGreeting;
