import { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Trending from "./Trending";
import SearchResults from "./SearchResults";
import CategorySearch from "./CategorySearch";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies, fetchPerson, fetchTV, getMovieSearch, getPersonSearch, getTVSearch } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        trending: state.trending,
        search: state.search
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchPerson: () => dispatch(fetchPerson()),
    fetchTV: () => dispatch(fetchTV()),
    getMovieSearch: (query)=>dispatch(getMovieSearch(query)),
    getTVSearch: (query)=>dispatch(getTVSearch(query)),
    getPersonSearch: (query)=>dispatch(getPersonSearch(query))
})

class Main extends Component{
    constructor(props) {
        super(props);

        this.state = {
            choice : null
        }

        this.setTrendingMovie = this.setTrendingMovie.bind(this);
        this.setTrendingTV = this.setTrendingTV.bind(this);
        this.setTrendingPerson = this.setTrendingPerson.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    setTrendingMovie() {
        this.setState({
            choice: "movies"
        });
        this.props.fetchMovies();
    }

    setTrendingTV() {
        this.setState({
            choice: "tv"
        });
        this.props.fetchTV();
    }

    setTrendingPerson() {
        this.setState({
            choice: "person"
        });
        this.props.fetchPerson();
    }

    onClick(event) {
        this.setState({
            choice: event.target.id
        });
    }

    render() {
        return (
            <div>
                <Header getMovieSearch={this.props.getMovieSearch} history={ this.props.history }/>
                <Switch>
                    {
                        // use searchresults as a component in categorysearch instead of different route
                    }
                        <Route path="/home" component={() => <Home />} />
                        <Route path="/trending" component={() => <Trending choice={this.state.choice} results={this.props.trending.results} loading={this.props.trending.isLoading} onMovieClick={this.setTrendingMovie} onTVClick={this.setTrendingTV} onPersonClick={this.setTrendingPerson} />} />
                    <Route path="/searchresults" component={() => <SearchResults results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice={ this.state.choice }/>} />
                    <Route exact path="/search" component={() => <CategorySearch onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history} choice={ this.state.choice }/>}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));