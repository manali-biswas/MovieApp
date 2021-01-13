import { Component } from "react";
import { Form,Input,Button } from "reactstrap";


class SearchForm extends Component{

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit(event) {
        switch (this.props.choice) {
            case "movie":
                this.props.getMovieSearch(this.query.value);
                break;
            case "tv":
                this.props.getTVSearch(this.query.value);
                break;
            case "person":
                this.props.getPersonSearch(this.query.value);
                break;
            default:
                break;    
        }
        
        this.props.history.push("/search/"+this.props.choice);
        event.preventDefault();
    }


    render() {
        if (this.props.choice !== null) {
            return (
                <Form className="form-inline my-2 my-lg-0" onSubmit={this.onSubmit}>
                    <Input className="mr-sm-2" type="text" name="query" id="query" innerRef={(input) => this.query = input} placeholder={"Search " + this.props.choice} aria-label="query" />
                    <Button className="btn-success my-2 my-sm-0" type="submit" value="submit">Search</Button>
                </Form>
            )
        }
        else {
            return (
                <div>
                    <p>Select a category</p>
                </div>
            )
        }
    }
}

export default SearchForm;