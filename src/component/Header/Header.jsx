import React from "react";
import {
    NavLink
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.scss';
import logo from '../../images/westgarth-logo.png';
import closeIcon from '../../images/close-icon.svg';


const Header = () => {
    return (
    <>
        <header className="header">
            <Container fluid>
                <Navbar  expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" className="top-toggle-menu" />
                    <Navbar.Collapse id="navbar-nav" className="header-nav ml-lg-4 ml-xl-5">
                        <Nav className="ml-auto">
                            <Nav.Link className="close-icon">
                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                    <img src={closeIcon} alt=""/>
                                </Navbar.Toggle>
                            </Nav.Link>
                            <Nav.Link>Dashboard</Nav.Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"><NavLink key={1} to="/account" className="nav-link">Account Information </NavLink></Navbar.Toggle>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"><NavLink key={1} to="/wine" className="nav-link">Wine collection </NavLink></Navbar.Toggle>
                            <Nav.Link>Live Market</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    </>
    )
};

export default Header;
