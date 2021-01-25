import { Media } from "reactstrap";
import { imageUrl } from "../shared/baseUrl";
import MovieModal from "./MovieModal";

function RenderMovie({ movie, details, detailloading, detailerr, modal, onModalClick, ModalToggle }) {
    return (
        <div>
        <Media key={movie.id} tag="li" className="mt-3">
            <Media left>
                <Media object src={imageUrl + movie.poster_path} alt={movie.title} width="128px" />
            </Media>
            <Media body className="ml-5">
                <Media heading>
                    {movie.title}
                </Media>
                <h6>Overview</h6>
                <p>{movie.overview}</p>
                <h6>Date: <span>{movie.release_date}</span></h6>            
                    <h6>Popularity: <span>{movie.popularity}</span></h6>
                    <MovieModal id={movie.id} modal={modal} details={details} detailloading={detailloading} detailerr={detailerr} ModalToggle={ModalToggle} onModalClick={onModalClick}/>
            </Media>
            <hr/>
            </Media>
            <hr/>
        </div>
    );
}

export default RenderMovie;