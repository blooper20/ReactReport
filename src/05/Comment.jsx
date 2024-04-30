import React from "react";
import "./style.css"

function Comment(props) {
    return (
        <div className="wrapper">
            <div className="contentContainer">
                <span className="nameText">{props.name}</span>
                <span className="commentText">
                    {props.comment}
                    </span>
            </div>
        </div>
    );
}

export default Comment;