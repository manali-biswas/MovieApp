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
            case "movie":
                itemslist=this.props.results.map((item) => {
                    return (<RenderMovie key={item.id} modal={this.props.modal} details={this.props.details} detailloading={this.props.detailloading} detailerr={this.props.detailerr} ModalToggle={this.props.ModalToggle} onModalClick={this.props.onModalClick} movie={item}/>)
                });
                break;
            case "tv":
                itemslist=this.props.results.map((item) => {
                    return (<RenderTV key={item.id} modal={this.props.modal} details={this.props.details} detailloading={this.props.detailloading} detailerr={this.props.detailerr} ModalToggle={this.props.ModalToggle} onModalClick={this.props.onModalClick} tv={item}/>)
                });
                break;
            case "person":
                itemslist=this.props.results.map((item) => {
                    return(<RenderPerson key={item.id} modal={this.props.modal} details={this.props.details} detailloading={this.props.detailloading} detailerr={this.props.detailerr} ModalToggle={this.props.ModalToggle} onModalClick={this.props.onModalClick} person={item}/>)
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
                    <Button color="outline-dark" className="mr-2" onClick={this.props.onMovieClick} active={this.props.choice==="movie"? true: false}>Movies</Button>
                    <Button color="outline-dark" className="mr-2" onClick={this.props.onTVClick} active={this.props.choice==="tv"? true: false}>TV Shows</Button>
                    <Button color="outline-dark" className="mr-2" onClick={this.props.onPersonClick} active={this.props.choice==="person"? true: false}>People</Button>
                </div>
                
                
                
                <Media list className="mt-5">
                    {itemslist}
                </Media>
            </div>
        )
    }
}

export default Trending;