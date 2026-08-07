import { Component } from "react";
import './button.scss'

export class Button extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        const {className, text, onClick} = this.props;
        return(
            <button className={className} onClick={onClick}>
                {text}
            </button>
        );
    };
};