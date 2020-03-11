import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon(props) {

    return (
        <span className={props.className} onClick={props.onClick}>
            <FontAwesomeIcon icon={props.icon}  />
            { (props.count) ?
                <span className="superscript">11</span>
                : null
            }
        </span>
    );

}

export default Icon;