import { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Form, Button, NavbarToggler, Collapse, Input} from "reactstrap";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <NavbarBrand href="/">MovieApp</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </NavItem> 
                            <NavItem>
                                <NavLink className="nav-link" to="/trending">Trending</NavLink>
                            </NavItem>  
                            <NavItem>
                                <NavLink className="nav-link" to="/search">Search by Category</NavLink>
                            </NavItem>                      
                            </Nav>
                        </Collapse>
                        <SearchForm choice="movie" history={this.props.history} getMovieSearch={this.props.getMovieSearch}/>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Header;