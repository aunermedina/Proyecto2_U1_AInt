import React, {Component} from "react";
import {render} from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Cargando..."
        };
    }

    componentDidMount() {
        fetch("api-v1/users/")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return {placeholder: "Algo ha ido mal!"};
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <h2>HI REact</h2>

        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App/>, container);