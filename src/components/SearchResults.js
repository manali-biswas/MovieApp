import { Media } from "reactstrap";
import RenderMovie from "./RenderMovie";
import RenderTV from "./RenderTV";
import RenderPerson from "./RenderPerson";
import Loading from "./Loading";

function SearchResults({ loading, err, results, choice, detailerr, detailloading, details, modal, onModalClick, ModalToggle }) {
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
                return (<RenderMovie modal={modal} details={details} detailloading={detailloading} detailerr={detailerr} ModalToggle={ModalToggle} onModalClick={onModalClick} movie={item} key={ item.id }/>)
            case "tv":

                return (<RenderTV modal={modal} details={details} detailloading={detailloading} detailerr={detailerr} ModalToggle={ModalToggle} onModalClick={onModalClick} tv={item} key={ item.id } />)

            case "person":

                return (<RenderPerson modal={modal} details={details} detailloading={detailloading} detailerr={detailerr} ModalToggle={ModalToggle} onModalClick={onModalClick} person={item} key={ item.id } />)

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