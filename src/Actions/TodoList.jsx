import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";


const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        marginTop: 25,
        padding: 0,
    }
}

function TodoList(props){
    return( 
        <ul style={styles.ul} className="todoList">
            { props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle}/>
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onToggle: PropTypes.func.isRequired
}

export default TodoList