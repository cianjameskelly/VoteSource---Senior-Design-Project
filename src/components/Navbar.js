import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './About';
import Home from './Home';
import Polis from './Polis';
import Suffolk from './Suffolk';
import Queens from './Queens';
import Bronx from './Bronx';
import { FaHome } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'
import { BsFillQuestionSquareFill } from 'react-icons/bs'
import { NavDropdown } from 'react-bootstrap';
import Login from './Login'
import Registration from './Registration'

export default function NavbarElements() {
    return (
        <Router>
        <div>
            <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
                <ReactBootStrap.Container>
                    <ReactBootStrap.Navbar.Brand>VoteSource</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="me-auto">
                            <ReactBootStrap.Nav.Link as={Link} to={'/home'}><FaHome></FaHome> Home</ReactBootStrap.Nav.Link>
                            <NavDropdown title="Candidates" id="collasible-nav-dropdown">
                                <NavDropdown.Item><ReactBootStrap.Nav.Link as={Link} to={'/polis'}>Nassau</ReactBootStrap.Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><ReactBootStrap.Nav.Link as={Link} to={'/suffolk'}>Suffolk</ReactBootStrap.Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><ReactBootStrap.Nav.Link as={Link} to={'/queens'}>Queens</ReactBootStrap.Nav.Link></NavDropdown.Item>
                                <NavDropdown.Item><ReactBootStrap.Nav.Link as={Link} to={'/bronx'}>Bronx</ReactBootStrap.Nav.Link></NavDropdown.Item>
                            </NavDropdown>
                            <ReactBootStrap.Nav.Link as={Link} to={'/about'}><BsFillQuestionSquareFill></BsFillQuestionSquareFill> About</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/registration'}> Registration</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/login'}> Login</ReactBootStrap.Nav.Link>
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
                <Route path="/suffolk">
                    <Suffolk />
                </Route>
                <Route path="/queens">
                    <Queens />
                </Route>
                <Route path="/bronx">
                    <Bronx />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}
