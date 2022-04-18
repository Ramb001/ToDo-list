import React, {useState} from "react";
import PropTypes from 'prop-types'
import './Addtodo.css'


function AddToDo({onCreate}){
    const [value, setValue] = useState('')

    function SubmitHandler(event){
        event.preventDefault()   

        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return(
        <section className="wordInput">
            <form onSubmit={SubmitHandler}>
                <input value={value} onChange={event => setValue(event.target.value)} className="deal"/>
                <button type="submit" className="add">Add ToDo</button>
            </form>
        </section>
    )
}

AddToDo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddToDo;