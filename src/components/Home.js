import { Row } from "reactstrap";
import { Component } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const slides = [
    {
        id: 0,
        src: "./assets/images/battleship.jpg",
        alt: "Battleship",
        tagline: "The Battle for Earth Begins at Sea",
        overview: "When mankind beams a radio signal into space, a reply comes from ‘Planet G’, in the form of several alien crafts that splash down in the waters off Hawaii. Lieutenant Alex Hopper is a weapons officer assigned to the USS John Paul Jones, part of an international naval coalition which becomes the world's last hope for survival as they engage the hostile alien force of unimaginable strength. While taking on the invaders, Hopper must also try to live up to the potential that his brother, and his fiancée's father—an Admiral—expect of him.",
        date: "13/04/2012 (IN)",
        genres: "Thriller, Action, Adventure, Science Fiction"
    },
    {
        id: 1,
        src: "./assets/images/AVA.jpg",
        alt: "AVA",
        tagline: "Kill. Or be killed.",
        overview: "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
        date: "25/09/2020 (US)",
        genres: "Action, Drama, Crime, Thriller"
    },
    {
        id: 2,
        src: "./assets/images/Sweet Home.jpg",
        alt: "Sweet Home",
        tagline: "Series",
        overview: "Cha Hyun-Soo is a high school student. He is also a recluse and rarely leaves his room. He refuses to talk to his father, mother and younger sister. One day, his whole family, except for him, dies in a car accident. Cha Hyun-Soo is left all alone. He moves into a small apartment. At this time, a mysterious phenomenon of humans turning into monster occur all around the world. The residents of Cha Hyun-Soo's apartment building, including Pyeon Sang-Wook, fight against these monsters and try to survive.",
        date: "2020",
        genres: "Drama, Sci-Fi and Fantasy"
    }
];


class Carousel extends Component{

    constructor(props) {
        super(props);

        this.state={
            activeslide: 0,
            slide: slides[0]
        }

        this.changeSlide = this.changeSlide.bind(this);
    }

    componentDidMount() {
        this.changeSlide();
    }
    
    componentDidUpdate() {
        this.changeSlide();
    }

    changeSlide() {
        var that = this;
        setTimeout(function () {
            var a = (that.state.activeslide + 1) % slides.length;
            that.setState({
                activeslide: a,
                slide: slides[a]
            })
        }, 6000);
    }

    render() {
        return (    
            <SwitchTransition mode={'out-in'}>
            <CSSTransition key={this.state.activeslide} addEndListener={(node,done)=>{node.addEventListener("transitionend",done,false)}} classNames="mycarousel" timeout={500}>
            <Row className="container">
                    <div className="col-md-4">
                        <img src={this.state.slide.src} width="100%" alt={this.state.slide.alt} />
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <h4>{this.state.slide.alt}</h4>
                        <em>{this.state.slide.tagline}</em>
                        <br /><br />
                        <h5>Overview</h5>
                        <p>{this.state.slide.overview}</p>
                        <p className="text-muted">{this.state.slide.date}</p>
                        <p>{this.state.slide.genres}</p>
                    </div>
                </Row>
                </CSSTransition>
            </SwitchTransition>
        )
    }
}

function Home() {
        return (
            <div className="container">
                <h1 className="mt-3">Movies</h1>
                <div className="container mt-5">
                    <Carousel />
                </div>
            </div>
        )
}

export default Home;