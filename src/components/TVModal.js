import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loading from "./Loading";
import { imageUrlOriginal } from "../shared/baseUrl";

function TVModalDetail({ details, detailloading, detailerr, toggle }) {
    if (detailloading === true || details===null) {
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
                <ModalHeader toggle={toggle}>{details.name}</ModalHeader>
                <ModalBody>
                    <img className="rounded" src={imageUrlOriginal + details.backdrop_path} alt={ details.name } width="100%"></img><hr />
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
                        <p><strong>Seasons:  </strong>
                            {details.number_of_seasons}</p>
                        <p><strong>First Aired On:  </strong>
                            {details.first_air_date}</p>
                        <p><strong>Country of origin:  </strong>
                            {details.origin_country}</p>
                        <p><strong>Available In:  </strong>
                        {details.spoken_languages.map((lang) => {
                            return (
                                <span key={lang.iso_639_1}>{lang.name+"\t"}</span>
                            )
                        })}</p>
                        <p><strong>Creators:  </strong>
                            <div className="d-flex justify-content-around">
                        {details.created_by.map((creator) => {
                            return (
                                <div  key={creator.id} style={{flexWrap: 'wrap'}}><img src={imageUrlOriginal + creator.profile_path} alt={ creator.name } width="140px"/><p>{creator.name+"\t"}</p></div>
                            )
                        })}</div></p>
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

function TVModal({id,onModalClick,modal,ModalToggle,detailerr,detailloading,details}){

        return (
            <div>
            <Button color="dark" onClick={onModalClick} id="tv" name={id}>More Info</Button>
            <Modal isOpen={parseInt(modal.id)===id?modal.value:false} toggle={ModalToggle}>
                    <TVModalDetail toggle={ModalToggle} detailerr={detailerr} detailloading={detailloading} details={details}/>
            </Modal></div>
        )
    }

export default TVModal;