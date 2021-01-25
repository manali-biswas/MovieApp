import { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Trending from "./Trending";
import CategorySearch from "./CategorySearch";
import Discover from "./Discover";
import { Redirect, Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies, fetchPerson, fetchTV, getMovieSearch, getPersonSearch, getTVSearch, changeSearchOption, fetchMovieGenres, fetchTVGenres, fetchDiscoverMovies, fetchDiscoverTV, fetchTVDetails, fetchMovieDetails, fetchPersonDetails } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        trending: state.trending,
        search: state.search,
        genres: state.genres,
        discover: state.discover,
        object: state.object
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchMovies: () => dispatch(fetchMovies()),
    fetchPerson: () => dispatch(fetchPerson()),
    fetchTV: () => dispatch(fetchTV()),
    getMovieSearch: (query)=>dispatch(getMovieSearch(query)),
    getTVSearch: (query)=>dispatch(getTVSearch(query)),
    getPersonSearch: (query) => dispatch(getPersonSearch(query)),
    changeSearchOption: () => dispatch(changeSearchOption()),
    fetchTVGenres: () => dispatch(fetchTVGenres()),
    fetchMovieGenres: () => dispatch(fetchMovieGenres()),
    fetchDiscoverMovies: (with_genres, sort) => dispatch(fetchDiscoverMovies(with_genres, sort)),
    fetchDiscoverTV: (with_genres, sort) => dispatch(fetchDiscoverTV(with_genres, sort)),
    fetchMovieDetails: (id) => dispatch(fetchMovieDetails(id)),
    fetchTVDetails: (id) => dispatch(fetchTVDetails(id)),
    fetchPersonDetails: (id) => dispatch(fetchPersonDetails(id))    
})

class Main extends Component{
    constructor(props) {
        super(props);

        this.state = {
            trendchoice: null,
            searchchoice: null,
            discoverchoice: null,
            discovergenres: [],
            sort: "popularity.desc",
            modal: {
                id: null,
                type: null,
                value:false
            }
        }

        this.setTrendingMovie = this.setTrendingMovie.bind(this);
        this.setTrendingTV = this.setTrendingTV.bind(this);
        this.setTrendingPerson = this.setTrendingPerson.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onDiscoverClick = this.onDiscoverClick.bind(this);
        this.onDiscoverFiter = this.onDiscoverFiter.bind(this);
        this.onDiscoverSort = this.onDiscoverSort.bind(this);
        this.onModalClick = this.onModalClick.bind(this);
        this.ModalToggle = this.ModalToggle.bind(this);
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

    ModalToggle(id,type) {
        this.setState({
            modal: {
                id: id,
                type: type,
                value:!this.state.modal.value
            }
        })
    }

    onModalClick(event) {
        this.ModalToggle(event.target.name,event.target.id);
        switch (event.target.id) {
            case "movie":
                this.props.fetchMovieDetails(event.target.name);
                break;
            case "tv":
                this.props.fetchTVDetails(event.target.name);
                break;
            case "person":
                this.props.fetchPersonDetails(event.target.name);
                 break;
            default:
                break;
        }
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

    onDiscoverClick(event) {    
        if (this.state.discoverchoice !== event.target.id) {
            this.setState({
                discoverchoice: event.target.id,
                discovergenres: []
            });
        }
        switch (event.target.id) {
            case "tv":
                this.props.fetchDiscoverTV(this.state.discovergenres, this.state.sort);
                this.props.fetchTVGenres()
                break;
            case "movie":
                this.props.fetchDiscoverMovies(this.state.discovergenres, this.state.sort);
                this.props.fetchMovieGenres();
                break
            default:
                break;
        }
    }

    onDiscoverFiter(genres) {
        this.setState({
            discovergenres: genres
        })
        switch (this.state.discoverchoice) {
            case "tv":
                this.props.fetchDiscoverTV(genres, this.state.sort);
                break;
            case "movie":
                this.props.fetchDiscoverMovies(genres, this.state.sort);
                break
            default:
                break;
        }
    }

    onDiscoverSort(sort) {
        this.setState({
            sort: sort
        });
        switch (this.state.discoverchoice) {
            case "tv":
                this.props.fetchDiscoverTV(this.state.discovergenres, sort);
                break;
            case "movie":
                this.props.fetchDiscoverMovies(this.state.discovergenres, sort);
                break
            default:
                break;
        }
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
                        <Route path="/trending" component={() => <Trending modal={this.state.modal} details={this.props.object.result} detailloading={this.props.object.loading} detailerr={this.props.object.err} ModalToggle={this.ModalToggle} onModalClick={this.onModalClick} choice={this.state.trendchoice} results={this.props.trending.results} loading={this.props.trending.isLoading} onMovieClick={this.setTrendingMovie} onTVClick={this.setTrendingTV} onPersonClick={this.setTrendingPerson} />} />
                        <Route exact path="/search" component={() => <CategorySearch results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice={null} onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history} />} />
                        <Route path="/search/movie" component={() => <CategorySearch modal={this.state.modal} details={this.props.object.result} detailloading={this.props.object.loading} detailerr={this.props.object.err}  ModalToggle={this.ModalToggle} onModalClick={this.onModalClick} results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice="movie" onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history} />} />
                    <Route path="/search/tv" component={() => <CategorySearch modal={this.state.modal} details={this.props.object.result} detailloading={this.props.object.loading} detailerr={this.props.object.err} ModalToggle={this.ModalToggle} onModalClick={this.onModalClick} results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice="tv" onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history} />} />
                        <Route path="/search/person" component={() => <CategorySearch modal={this.state.mo4} details={this.props.object.result} detailloading={this.props.object.loading} detailerr={this.props.object.err} ModalToggle={this.ModalToggle} onModalClick={this.onModalClick} results={this.props.search.results} loading={this.props.search.isLoading} err={this.props.search.err} choice="person" onClick={this.onClick} getTVSearch={this.props.getTVSearch} getMovieSearch={this.props.getMovieSearch} getPersonSearch={this.props.getPersonSearch} history={this.props.history} />} />
                        <Route path="/discover" component={() => <Discover modal={this.state.modal} details={this.props.object.result} detailloading={this.props.object.loading} detailerr={this.props.object.err} ModalToggle={this.ModalToggle} onModalClick={this.onModalClick} sort={ this.state.sort } filterGenres={ this.state.discovergenres } onSortClick={ this.onDiscoverSort } choice={this.state.discoverchoice} onClick={this.onDiscoverClick} genrelist={this.props.genres.results} err={this.props.genres.err} loading={this.props.genres.loading} results={this.props.discover.results} discoverLoading={this.props.discover.loading} discoverErr={this.props.discover.err} onFilterClick={ this.onDiscoverFiter }/> } />
                        <Redirect to="/home"/>
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));