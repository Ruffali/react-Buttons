import React, { Component } from 'react'
import Button from "../button/Button";
import "./Show.scss";

class Show extends Component {
    constructor(props) {
        super(props)
   
        this.state = {
            buttons: [
                {
                    theme: "primary",
                    inside: "Primary"
                },
                {
                    theme: "secondary",
                    inside: "Secondary"
                },
                {
                    theme: "success",
                    inside: "Success"
                },
                {
                    theme: "danger",
                    inside: "Danger"
                },
                {
                    theme: "warning",
                    inside: "Warning"
                },
                {
                    theme: "info",
                    inside: "Info"
                },
                {
                    theme: "light",
                    inside: "Light"
                },
                {
                    theme: "dark",
                    inside: "Dark"
                },
            ]
        };
    }
    render() {
        return (
            <div className='show'>
                {this.state.buttons.map((btn, i) => (
                    <Button key={i} theme={btn.theme}>{btn.inside}</Button>
                ))}
            </div>
        )
    }

}

export default Show;
