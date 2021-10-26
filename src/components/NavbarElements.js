import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//import Dashboard from '../Dashboard'
import About from './About';
import Home from './Home';
import Polis from './Polis';

export default function NavbarElements() {
    return (
        <Router minwidth={100}>
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand href="#home">VoteSource</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="me-auto">
                            <ReactBootStrap.Nav.Link as={Link} to={'/home'}>Home</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/polis'}>Candidates</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/dashboard'}>Profile</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/about'}>About</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
        </div>
        <div>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/polis">
                    <Polis />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}
