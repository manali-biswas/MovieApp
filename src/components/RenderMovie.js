import { Media } from "reactstrap";
import { imageUrl } from "../shared/baseUrl";

function RenderMovie({ movie }) {
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
            </Media>
            <hr/>
            </Media>
            <hr/>
        </div>
    );
}

export default RenderMovie;