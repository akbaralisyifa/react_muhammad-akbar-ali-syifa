import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="Navbar">
            <h2>Simpel Hearder</h2>
            <div className="link">
                <ul className="NavList">
                    <li>
                        <Link to="/">Landing Page</Link>
                    </li>
                    <li>
                        <Link to="/createProduct">Create Product</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;


