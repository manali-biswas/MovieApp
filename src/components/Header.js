import { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, Form, Button, NavbarToggler, Collapse, Input, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }

        this.toggle = this.toggle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    onSubmit(event) {
        this.props.getSearch(this.query.value);
        this.props.history.push("/searchresults");
        event.preventDefault();
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
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </NavItem> 
                            <NavItem>
                                <NavLink className="nav-link" to="/trending">Trending</NavLink>
                            </NavItem>  
                            <NavItem>
                                <NavLink className="nav-link" to="/search">Search by Category</NavLink>
                            </NavItem>                      
                            </Nav>
                        </Collapse>
                        <Form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                            <Input className="mr-sm-2" type="text" name="query" id="query" innerRef={(input)=>this.query=input} placeholder="Search Movie" aria-label="query" />
                            <Button className="btn-success my-2 my-sm-0" type="submit" value="submit">Search</Button>
                        </Form>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Header;