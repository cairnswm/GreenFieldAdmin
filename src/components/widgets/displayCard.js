import React from "react";

function DisplayCard(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.header}</h5>
                <hr></hr>
                <p className="card-text">{props.text}</p>
                <a href="/about" className="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>
    );
}

export default DisplayCard;