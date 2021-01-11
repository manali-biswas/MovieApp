import { Media } from "reactstrap";
import RenderMovie from "./RenderMovie";
import Loading from "./Loading";

function SearchResults({ loading, err, results }) {
    if (loading) {
        return (<div className="container mt-5">
            <Loading />
        </div>);
    }
    else if (err) {
        return (<div className="container mt-5">
            {err}
        </div>);
    }
    const movies=results.map((movie) => {
        return(<RenderMovie movie={movie}/>)
    });

    return (
        <div className="container mt-5">
            <h1>Search Results</h1>

            <Media list className="mt-5">
                {movies}
            </Media>
        </div>
    )
}

export default SearchResults;