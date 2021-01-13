import { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Trending from "./Trending";
import CategorySearch from "./CategorySearch";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies, fetchPerson, fetchTV, getMovieSearch, getPersonSearch, getTVSearch, changeSearchOption } from "../redux/ActionCreators";

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
    getPersonSearch: (query) => dispatch(getPersonSearch(query)),
    changeSearchOption: () => dispatch(changeSearchOption())
})

class Main extends Component{
    constructor(props) {
        super(props);

        this.state = {
            trendchoice: null,
            searchchoice : null
        }

        this.setTrendingMovie = this.setTrendingMovie.bind(this);
        this.setTrendingTV = this.setTrendingTV.bind(this);
        this.setTrendingPerson = this.setTrendingPerson.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    setTrendingMovie() {
        this.setState({
            trendchoice: "movie"
        });
        this.props.fetchMovies();
    }

    setTrendingTV() {
        this.setState({
            trendchoice: "tv"
        });
        this.props.fetchTV();
    }

    setTrendingPerson() {
        this.setState({
            trendchoice: "person"
        });
        this.props.fetchPerson();
    }

    onClick(event) {
        if (this.state.searchchoice !== event.target.id) {
            this.props.changeSearchOption();
        }
        this.setState({
            searchchoice: event.target.id
        });
        this.props.history.push("/search/" + event.target.id);
    }

    render() {
        return (
            <div>
                <Header getMovieSearch={this.props.getMovieSearch} history={ this.props.history }/>
                <Switch>
                    {
                        //paths for individual tv, movie and person
                    }
                        <Route path="/home" component={() => <Home />} />
                        <Route path="/trending" component={() => <Trending choice={this.state.trendchoice} results={this.props.trending.results} loading={this.props.trending.isLoading} onMovieClick={this.setTrendingMovie} onTVClick={this.setTrendingTV} onPersonClick={this.setTrendingPerson} />} />
                        <Route exact path="/search" component={() => <CategorySearch results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice={null} onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history} />} />
                        <Route path="/search/movie" component={() => <CategorySearch results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice="movie" onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history} />} />
                        <Route path="/search/tv" component={() => <CategorySearch results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice="tv" onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history} />} />
                        <Route path="/search/person" component={()=><CategorySearch results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice="person" onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history}/>}/>
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));