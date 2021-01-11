import { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Trending from "./Trending";
import SearchResults from "./SearchResults";
import CategorySearch from "./CategorySearch";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies, fetchPerson, fetchTV, getSearch } from "../redux/ActionCreators";

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
    getSearch: (query)=>dispatch(getSearch(query))
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

    render() {
        return (
            <div>
                <Header getSearch={this.props.getSearch} history={ this.props.history }/>
                    <Switch>
                        <Route path="/home" component={() => <Home />} />
                        <Route path="/trending" component={() => <Trending choice={this.state.choice} results={this.props.trending.results} loading={this.props.trending.isLoading} onMovieClick={this.setTrendingMovie} onTVClick={this.setTrendingTV} onPersonClick={this.setTrendingPerson} />} />
                        <Route path="/searchresults" component={() => <SearchResults results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} />} />
                        <Route path="/search" component={()=><CategorySearch />}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));