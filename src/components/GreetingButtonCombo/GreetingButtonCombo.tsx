import React, { Component } from 'react';
import GreetingWithName from '../../components/GreetingWithName/GreetingWithName';

interface IProps {}

interface IState {
    name: string
}

class GreetingButtonCombo extends Component<IProps, IState> {
    constructor(props: Readonly<IProps>) {
        super(props);
        this.state = {
            name: ''
        }

        this.randomiseName = this.randomiseName.bind(this);
    }

    componentDidMount(): void {
        this.randomiseName();
    }

    randomiseName(): void {
        const teamMembers: string[] = [
            "Caroline",
            "Jake",
            "Leonor",
            "Akshat",
            "Erin"
        ];
        const randomIndex: number = Math.floor(Math.random() * 5);
        this.setState({
            name: teamMembers[randomIndex]
        });
    }

    render(): JSX.Element {
        return (
            <div>
                <GreetingWithName name={this.state.name} />
                <button onClick={this.randomiseName}>click me</button>
            </div>
        );
    }
}

export default GreetingButtonCombo
