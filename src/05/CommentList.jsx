import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "김인덕",
        comment: "첫번째 댓글",
    },
    {
        name: "이컴소",
        comment: "두번째 댓글",
    },
    {
        name: "나개발",
        comment: "세번째 댓글",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                )
            })}
        </div>
    );
}

export default CommentList;