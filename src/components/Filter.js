import React, { Component } from "react";
import Multiselect from "react-bootstrap-multiselect";
import { Button } from "reactstrap";

var list;

class Filter extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            data: [
                {
                    label: "Genres",
                    children: []
                }
            ]
        }

        this.ref = React.createRef();
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        list = [];
        var that = this;
        this.props.genrelist.map((genre) => {
            if (that.props.filterGenres.includes(genre.id.toString())) {
                list.push({ value: genre.id, label: genre.name, selected: true })
            }
            else {
                list.push({ value: genre.id, label: genre.name })
            }
        });
        this.setState({
            data: [
                {
                    label: "Genres",
                    children: list
                }
            ]
        })
    }

    toggle() {
        this.setState({
            isOpen: true
        });
    }

    onClick() {
        var x = this.genres.$multiselect.val();        
        this.props.onClick(x);
    }

    render() {
        
        return (
            <div className="container">
                <span className="mr-2">Filter</span>
                <Multiselect ref={(input)=>this.genres=input} data={this.state.data} multiple includeSelectedOptions />
                <Button className="ml-1 btn btn-dark" onClick={this.onClick}>Apply Filter</Button>
            </div>
        )
    }
}

export default Filter;