import { Link } from "react-router-dom";
import '../assets/styleNavbar.css'

const Navbar = () => {
    return(
        <nav>
            <h1 className="nav-judul">Barre_Barre</h1>
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/createProduct" className="nav-link">Create Product</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;