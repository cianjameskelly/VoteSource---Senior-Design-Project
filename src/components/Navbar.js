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
import { BsFillQuestionSquareFill } from 'react-icons/bs'
import { NavDropdown } from 'react-bootstrap';
import Login from './Login'
import Register from './Signup'
import PoliProfile from './PoliProfile'
import Signup from './Signup';
import RegSignup from './RegSignup';

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
                            <NavDropdown title="Candidates" bg="dark" variant="dark">
                                <NavDropdown.Item><Link as={Link} to={'/polis'}>Nassau</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link as={Link} to={'/suffolk'}>Suffolk</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link as={Link} to={'/queens'}>Queens</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link as={Link} to={'/bronx'}>Bronx</Link></NavDropdown.Item>
                            </NavDropdown>
                            <ReactBootStrap.Nav.Link as={Link} to={'/about'}><BsFillQuestionSquareFill></BsFillQuestionSquareFill> About</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/regsignup'}> Sign Up</ReactBootStrap.Nav.Link>       
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
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/regsignup">
                    <RegSignup />
                </Route>
                <Route path="/poliprofile">
                    <PoliProfile />
                </Route>
            </Switch>
        </div>
        </Router>
    )
}
