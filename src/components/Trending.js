import { Component } from "react";
import { Media, Button } from "reactstrap";
import Loading from "./Loading";
import RenderMovie from "./RenderMovie";
import RenderTV from "./RenderTV";
import RenderPerson from "./RenderPerson";


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