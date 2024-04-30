import React, { useState, useEffect } from "react";

const posts = [];

function ToDoList(props) {

    const [text, setText] = useState('');

    const [count, setCount] = useState(1);

    useEffect(() => {
        
    }, posts);

    const handleChangeName = (event) => {
        setText(event.target.value);
    }

    const onButtonClick = () => {
        posts.push({ id: count, title: text});
        setCount(count + 1);
    }

    const onRemoveButtonClick = (id) => {
        posts.splice(id, 1);
    }

    const content = posts.map((post) =>
    <div key={post.id}>
        <li>
            {post.title}
            <button onClick={onRemoveButtonClick(post.id)}>삭제</button>
        </li>
    </div>
    );

    return (
        
        <div>
            <h1>Todo List</h1>
            할 일: <input type="text" value={text} onChange={handleChangeName}/>
             <button onClick={onButtonClick}>추가</button>
            <hr />
            <div style={{padding: 10}}>

                <fieldset>
                    <legend>할 일 목록</legend>
                    {content}
                </fieldset>
                
            </div>
        </div>
    );
}

export default ToDoList;
