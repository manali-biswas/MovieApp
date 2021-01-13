import { Media } from "reactstrap";
import RenderMovie from "./RenderMovie";
import RenderTV from "./RenderTV";
import RenderPerson from "./RenderPerson";
import Loading from "./Loading";

function SearchResults({ loading, err, results, choice }) {
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

    const items = results.map((item) => {
        switch (choice) {
            case "movie":
                return (<RenderMovie movie={item} key={ item.id }/>)
            case "tv":

                return (<RenderTV tv={item} key={ item.id } />)

            case "person":

                return (<RenderPerson person={item} key={ item.id } />)

            default:
                return (<div></div>);
        }
    });

    return (
        <div className="container mt-5">
            <h2>Search Results</h2>

            <Media list className="mt-5">
                {items}
            </Media>
        </div>
    )
}

export default SearchResults;