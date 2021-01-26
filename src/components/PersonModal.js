import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Loading from "./Loading";
import { imageUrlOriginal } from "../shared/baseUrl";

function PersonModalDetail({ details, detailloading, detailerr, toggle }) {
    if (detailloading === true) {
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
                    <img className="mx-auto d-block rounded" src={imageUrlOriginal + details.profile_path} alt={ details.name } width="50%"></img><hr />
                    <div className="container">
                        <em>{details.known_for_department}</em>
                        <br /><br/>
                        <p>{details.gender===2?"Male":details.gender===1?"Female":details.gender===0?"Other Gender":"Unknown"}</p>
                        <br />
                        <p><strong>Biography:  </strong>
                            {details.biography}</p>
                        <p><strong>Birthday: </strong>
                            { details.birthday }</p>
                        <p><strong>Place of Birth:  </strong>
                            {details.place_of_birth}</p>
                        <p><strong>Popularity:  </strong>
                            {details.popularity}</p>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Close</Button>
                </ModalFooter>
            </>
        );
    }
}

function PersonModal({id,onModalClick,modal,ModalToggle,detailerr,detailloading,details}){

        return (
            <div>
            <Button color="dark" onClick={onModalClick} id="person" name={id}>More Info</Button>
            <Modal className="modal-lg" isOpen={parseInt(modal.id)===id?modal.value:false} toggle={ModalToggle}>
                    <PersonModalDetail toggle={ModalToggle} detailerr={detailerr} detailloading={detailloading} details={details}/>
            </Modal></div>
        )
    }

export default PersonModal;