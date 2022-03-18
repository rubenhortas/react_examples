import React from "react";
import List from "../List/List";
import Contador from "../Contador/Contador"

class MainComponent extends React.Component {
    elementos = [
        { id: 1, nombre: "Jorge", edad: 45 },
        { id: 2, nombre: "Juan", edad: 37 },
    ]


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className='main-container'>
                <h1>{this.props.title}</h1>
                <List datos={this.elementos} />
            </main>
        )
    }
}

export default MainComponent;