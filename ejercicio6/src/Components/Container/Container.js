//import '.Container.scss';

import { Link, Route, Routes } from "react-router-dom";
import Detail from "../Detail/Detail";
import List from "../List/List";
import New from "../New/New";


function Container() {
    return (
        <div className="div-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/list">List</Link>
                    </li>
                    <li>
                        <Link to="/new">New</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route
                    path="*"
                    element={<List />}
                    index
                />
                <Route
                    path="/list"
                    element={<List />}
                />
                <Route
                    path="/new"
                    element={<New />}
                />
                <Route
                    path="/list/:id"
                    element={<Detail />}
                />
            </Routes>
        </div>
    );
}

export default Container;