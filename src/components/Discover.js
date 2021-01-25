import { Component } from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import { Button } from "reactstrap";
import SearchResults from "./SearchResults";

class Discover extends Component{
    render() {
        return (
            <div className="container mt-5">
                <h1>Discover Movies and TV Shows</h1>
                
                <div className="mt-3 d-flex justify-contents-center">
                    <div className="container">
                    <Button color="outline-dark" className="mr-2" id="movie" onClick={this.props.onClick} active={this.props.choice==="movie"? true: false}>Movie</Button>
                    <Button color="outline-dark" className="mr-2" id="tv" onClick={this.props.onClick} active={this.props.choice==="tv"? true: false}>TV Show</Button>
                    </div>
                    <div className="container">
                        <Filter filterGenres={ this.props.filterGenres } onClick={ this.props.onFilterClick } genrelist={this.props.genrelist} err={this.props.err} loading={this.props.loading} choice={ this.props.choice }/>
                    </div>
                    
                    <div className="container">
                        <Sort sort={ this.props.sort } onClick={ this.props.onSortClick }/>
                    </div>
                </div>
                
                <div className="mt-5">
                    <SearchResults details={this.props.details} detailloading={this.props.detailloading} detailerr={this.props.detailerr} modal={ this.props.modal } ModalToggle={this.props.ModalToggle} onModalClick={this.props.onModalClick} results={this.props.results} loading={this.props.discoverLoading} err={this.props.discoverErr} choice={ this.props.choice }/>
                </div>
            </div>
        )
    }
}

export default Discover;