import { Component } from "react";
import { Button } from "reactstrap";

class CategorySearch extends Component{

    render() {

        return (
            <div className="container mt-5">
                <h1>Search By Category</h1>
                <div>
                    <Button color="outline-dark" className="mr-2">Movie</Button>
                    <Button color="outline-dark" className="mr-2">TV Show</Button>
                    <Button color="outline-dark" className="mr-2">Person</Button>
                </div>        
            </div>
        )
    }
}

export default CategorySearch;