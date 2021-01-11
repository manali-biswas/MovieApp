import { Component } from "react";
import { Media, Button } from "reactstrap";
import { imageUrl } from "../shared/baseUrl";
import Loading from "./Loading";
import RenderMovie from "./RenderMovie";

function RenderTV({ tv }) {
    return (
        <div>
        <Media key={tv.id} tag="li" className="mt-3">
            <Media left>
                <Media object src={imageUrl + tv.poster_path} alt={tv.original_name} width="128px" />
            </Media>
            <Media body className="ml-5">
                <Media heading>
                    {tv.original_name}
                </Media>
                <h6>Overview</h6>
                <p>{tv.overview}</p>          
                <h6>Popularity: <span>{tv.popularity}</span></h6>
            </Media>
            <hr/>
            </Media>
            <hr/>
        </div>
    );
}

function RenderPerson({ person }) {
    return (
        <div>
        <Media key={person.id} tag="li" className="mt-3">
            <Media left>
                <Media object src={imageUrl + person.profile_path} alt={person.name} width="128px" />
            </Media>
            <Media body className="ml-5">
                <Media heading>
                    {person.name}
                </Media>
                <h6>Department</h6>
                <p>{person.known_for_department}</p>
            </Media>
            <hr/>
            </Media>
            <hr/>
        </div>
    );
}

class Trending extends Component{

    render() {

        if (this.props.loading) {
            return (
                <div className="container mt-5">
                    <Loading />
                </div>
            );
        }
        var itemslist;
        switch (this.props.choice) {
            case "movies":
                itemslist=this.props.results.map((item) => {
                    return(<RenderMovie movie={item}/>)
                });
                break;
            case "tv":
                itemslist=this.props.results.map((item) => {
                    return(<RenderTV tv={item}/>)
                });
                break;
            case "person":
                itemslist=this.props.results.map((item) => {
                    return(<RenderPerson person={item}/>)
                });
                break;
        
            default:
                itemslist = "";
                break;
        }

        return (
            <div className="container mt-5">
                <h1>Trending</h1>
                <h3>Top {this.props.choice} of the week</h3>
                <div className="mt-3">           
                    <Button color="outline-dark" className="mr-2" onClick={this.props.onMovieClick}>Movies</Button>
                    <Button color="outline-dark" className="mr-2" onClick={this.props.onTVClick}>TV Shows</Button>
                    <Button color="outline-dark" className="mr-2" onClick={this.props.onPersonClick}>People</Button>
                </div>
                
                
                
                <Media list className="mt-5">
                    {itemslist}
                </Media>
            </div>
        )
    }
}

export default Trending;