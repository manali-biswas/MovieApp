import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loading from "./Loading";
import { imageUrlOriginal } from "../shared/baseUrl";

function MovieModalDetail({ details, detailloading, detailerr, toggle }) {
    if (detailloading === true ) {
        return (
            <><ModalHeader toggle={toggle}>Loading</ModalHeader>
            <ModalBody>
                <Loading/>
            </ModalBody></>
        );
    }

    else if (detailerr != null) {
        return (
            <>
                <ModalHeader toggle={toggle}>Error</ModalHeader>
                <ModalBody>
                    {detailerr}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </>
        );
    }

    else {
        return (
            <>
                <ModalHeader toggle={toggle}>{details.title}</ModalHeader>
                <ModalBody>
                    <img className="rounded" src={imageUrlOriginal + details.backdrop_path} alt={ details.title } width="100%"></img><hr />
                    <div className="container">
                        <em>{details.tagline}</em>
                        <br/><br/>
                        <p>{details.overview}</p>
                        <br />
                        <p><strong>Genres: </strong>
                        {details.genres.map((genre) => {
                            return (
                                <span key={genre.id}>{genre.name+"\t"}</span>
                            )
                        })}</p>
                        <p><strong>Released On:  </strong>
                            {details.release_date}</p>
                        <p><strong>Available In:  </strong>
                        {details.spoken_languages.map((lang) => {
                            return (
                                <span key={lang.iso_639_1}>{lang.name+"\t"}</span>
                            )
                        })}</p>
                        <p><strong>Popularity:  </strong>
                            {details.popularity}</p>
                        <p><strong>Average vote (Out of 10):  </strong>
                            {details.vote_average}</p>
                        <p><strong>Vote Count:  </strong>
                            {details.vote_count}</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </>
        );
    }
}

function MovieModal({id,onModalClick,modal,ModalToggle,detailerr,detailloading,details}){

        return (
            <div>
            <Button color="dark" onClick={onModalClick} id="movie" name={id}>More Info</Button>
            <Modal isOpen={modal.id==id?modal.value:false} toggle={ModalToggle}>
                    <MovieModalDetail toggle={ModalToggle} detailerr={detailerr} detailloading={detailloading} details={details}/>
            </Modal></div>
        )
    }

export default MovieModal;