import React, {useContext} from "react";
import PropTypes from 'prop-types';
import Context from "../Context";
import './TodoItem.css'

const styles = {
    input: {
        marginRight: '1rem'
    },
    section: {
        textAlign: 'center'
    }
}

function TodoItem({ todo, onChange }){
    const {removeTodo} = useContext(Context)
    const [checked, setChecked] = React.useState(false)

    return (
    <section className="item" style={styles.section}> 
        <span className={checked ? "done" : ""}>
            <input type="checkbox" 
            checked={checked}
            style={styles.input} 
            onChange={() => setChecked(check => !check)}/>
            {todo.title}
        </span>
        <button className='rm' onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </section>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem