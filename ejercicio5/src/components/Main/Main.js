import { useState } from "react";
import Controlled from "../Controlled/Controlled";
import UnControlled from "../UnControlled/UnControlled";
import Toggle from "../Toggle/Toggle";

function Main() {
    const [controlled, setControlled] = useState(false);

    const toggleChange = (toggle) => {
        setControlled(toggle);
    }

    return (
        <div className="main">
            <Toggle
                opcion1="Controlled"
                opcion2="Uncontrolled"
                handleClick={toggleChange}
            />
            {
                controlled ? <Controlled /> : <UnControlled />
            }
        </div>
    )

}

export default Main;