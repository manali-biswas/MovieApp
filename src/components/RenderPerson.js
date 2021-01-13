import { Media } from "reactstrap";
import { imageUrl } from "../shared/baseUrl";

function RenderPerson({ person }) {
    return (
        <div>
        <Media key={person.id} tag="li" className="mt-3">
            <Media left>
                <Media object src={imageUrl + person.profile_path} alt={person.name} width="128px" />
            </Media>
            <Media body className="ml-5">
                <Media heading>
                    {person.name}
                </Media>
                <h6>Department</h6>
                <p>{person.known_for_department}</p>
            </Media>
            <hr/>
            </Media>
            <hr/>
        </div>
    );
}

export default RenderPerson;