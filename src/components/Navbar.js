import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"
import About from './About';
import Home from './Home';
import Polis from './Polis';
import Suffolk from './Suffolk';
import Queens from './Queens';
import Bronx from './Bronx';
import { FaHome } from 'react-icons/fa'
import { BsFillQuestionSquareFill } from 'react-icons/bs'
import { MdAdminPanelSettings } from 'react-icons/md'
import { NavDropdown } from 'react-bootstrap';
import Login from './Login'
import PoliProfile from './PoliProfile'
import Signup from './Signup';
import RegSignup from './RegSignup';
import Admin from './Admin';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';

export default function NavbarElements() {
    const { logout, currentUser } = useAuth()
    const history = useHistory()

    const handleLogoutClick = () => {
        logout()
        history.push('/home')
    }

    const authButton = () => {
        if (currentUser === null) {
            return (
                <ReactBootStrap.ButtonGroup>
                    <ReactBootStrap.Button variant="secondary" as={Link} to="/login">Login</ReactBootStrap.Button>
                    <ReactBootStrap.Button variant="secondary" as={Link} to="/regsignup">Signup</ReactBootStrap.Button>
                </ReactBootStrap.ButtonGroup>
            )
                
        } else {
            return (
                <ReactBootStrap.ButtonGroup>
                    <ReactBootStrap.Button variant="secondary" onClick={handleLogoutClick}>Logout</ReactBootStrap.Button>
                    <ReactBootStrap.Button variant="secondary" as={Link} to="/profile">Profile</ReactBootStrap.Button>
                </ReactBootStrap.ButtonGroup>
            )
        }
    }

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
                            <NavDropdown title="Candidates" background-color="dark">
                                <NavDropdown.Item><Link as={Link} to={'/polis'}>Nassau</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link as={Link} to={'/suffolk'}>Suffolk</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link as={Link} to={'/queens'}>Queens</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link as={Link} to={'/bronx'}>Bronx</Link></NavDropdown.Item>
                            </NavDropdown>
                            <ReactBootStrap.Nav.Link as={Link} to={'/about'}><BsFillQuestionSquareFill></BsFillQuestionSquareFill> About</ReactBootStrap.Nav.Link>
                            <ReactBootStrap.Nav.Link as={Link} to={'/admin'}><MdAdminPanelSettings></MdAdminPanelSettings> Admin</ReactBootStrap.Nav.Link>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                    <ReactBootStrap.Form inline className="mx-3">
                        {authButton()}
                    </ReactBootStrap.Form>
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
                <Route path="/admin">
                    <Admin />
                </Route>
                <PrivateRoute exact path="/profile">
                    <Profile />
                </PrivateRoute>
            </Switch>
        </div>
        </Router>
    )
}
