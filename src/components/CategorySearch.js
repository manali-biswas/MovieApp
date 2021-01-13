import { Component } from "react";
import { Button } from "reactstrap";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";

class CategorySearch extends Component{
    
    render() {

        return (
            <div className="container mt-5">
                <h1>Search By Category</h1>
                <div className="mt-3">
                    <Button color="outline-dark" className="mr-2" id="movie" onClick={this.props.onClick} active={this.props.choice==="movie"? true: false}>Movie</Button>
                    <Button color="outline-dark" className="mr-2" id="tv" onClick={this.props.onClick} active={this.props.choice==="tv"? true: false}>TV Show</Button>
                    <Button color="outline-dark" className="mr-2" id="person" onClick={this.props.onClick} active={this.props.choice==="person"? true: false}>Person</Button>
                </div>
                <div className="container mt-5">
                    <SearchForm choice={this.props.choice} getMovieSearch={this.props.getMovieSearch} getTVSearch={this.props.getTVSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history}/>
                </div>
                <div className="mt-5">
                    <SearchResults results={this.props.results} loading={this.props.isLoading} err={this.props.err} choice={ this.props.choice }/>
                </div>
            </div>
        )
    }
}

export default CategorySearch;