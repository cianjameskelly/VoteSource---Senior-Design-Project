import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './Dashboard'
import About from './About';
import Home from './Home';
import Polis from './Polis';
import { FaHome } from 'react-icons/fa'
import { MdPerson } from 'react-icons/md'
import { HiUserGroup } from 'react-icons/hi'
import { BsFillQuestionSquareFill } from 'react-icons/bs'

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
                            <ReactBootStrap.Nav.Link as={Link} to={'/polis'}><HiUserGroup></HiUserGroup> Candidates</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/dashboard'}><MdPerson></MdPerson> Profile</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/about'}><BsFillQuestionSquareFill></BsFillQuestionSquareFill> About</ReactBootStrap.Nav.Link>
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
