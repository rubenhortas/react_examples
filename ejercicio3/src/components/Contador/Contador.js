import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numero: 0,
        }

        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            const numero = this.state.numero;
            this.setState({
                numero: numero + 1,
            })
        }, 1000);
    }

    reset() {
        this.setState({
            numero: 0,
        })
    }

    render() {
        return (
            <div>
                {this.state.numero}
                <button onClick={this.reset}> reset</button>
            </div>
        )
    }
}

export default Contador;