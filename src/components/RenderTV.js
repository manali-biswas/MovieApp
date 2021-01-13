import { Media } from "reactstrap";
import { imageUrl } from "../shared/baseUrl";

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

export default RenderTV;