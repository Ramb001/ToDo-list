import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import AddToDo from "../Actions/Addtodo";
import TodoList from "../Actions/TodoList";
import './Navbar.css'

function Header() {
    return (
        <div>
        <>
            <Navbar sticky="top" className="header">
            <Container>
                <img src="logo.png" type="img/png" className="logo"/>
                <Navbar.Brand href="#home">World inc.</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/todolist">ToDo list</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        </>
        <div>
            <Routes>
                <Route path="/todolist" />
            </Routes>
        </div>

        </div>
    );
}

export default Header;