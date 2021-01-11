import { Spinner } from "reactstrap";

function Loading() {
    return (
        <div className="container text-center">
            <Spinner color="dark"/>
        </div>
    )
}

export default Loading;