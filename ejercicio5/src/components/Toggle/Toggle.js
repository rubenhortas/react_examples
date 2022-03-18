import { useState } from "react";

function Toggle(props) {
    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
        props.handleClick(!toggle);
    }

    return (
        <div className="toggle">
            <button className="btn btn-primary mx-2" onClick={handleClick}>
                {toggle ? <span>{props.opcion1}</span> : <span>{props.opcion2}</span>}
            </button>
        </div>
    )

}

export default Toggle;