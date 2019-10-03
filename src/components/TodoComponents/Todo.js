import React from 'react';

const Todo = props => {
    return(
<div onClick={props.onClick}> 
    <p>{props.task}</p>
</div>
    )
}


export default Todo