import { Component } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

class Sort extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            active: this.props.sort
        }

        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    onClick(event) {
        this.props.onClick(event.target.value);
    }


    render() {
        return (
            <div className="container">
                <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                    <DropdownToggle caret color="outline-dark">
                        Sort
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Options</DropdownItem>
                        <DropdownItem onClick={ this.onClick } value="popularity.asc" active={this.state.active==="popularity.asc"?true:false}>Popularity Ascending</DropdownItem>                
                        <DropdownItem onClick={ this.onClick } value="popularity.desc" active={this.state.active==="popularity.desc"?true:false}>Popularity Descending</DropdownItem>
                        <DropdownItem onClick={ this.onClick } value="vote_average.asc" active={this.state.active==="vote_average.asc"?true:false}>Average Vote Ascending</DropdownItem>                
                        <DropdownItem onClick={ this.onClick } value="vote_average.desc" active={this.state.active==="vote_average.asc"?true:false}>Average Vote Descending</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        )
    }
}

export default Sort;