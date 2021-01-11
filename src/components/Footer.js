import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer mt-5 bg-light">
            <div className="container" style={{ padding: "20px"}}>
                <div className="row">
                    <div className="col-md-4">
                        <p>MovieApp</p>
                    </div>
                    <div className="col-md-4">
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                <Link className="text-secondary" to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className="text-secondary" to="/categories">Categories</Link>
                            </li>
                            <li>
                                <Link className="text-secondary" to="/trending">Trending</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <ul style={{listStyleType: "none"}}>
                            <li>
                                Contact Us
                            </li>
                            <li>
                                Email
                            </li>
                            <li>
                                Facebook
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
        </footer>
    )
}

export default Footer;