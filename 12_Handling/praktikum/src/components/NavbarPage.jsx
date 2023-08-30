const NavbarPage = () =>{

    const links = ['Home', 'Features', 'Pricing', 'FAQs', 'About']
    return (
            <nav className="Navbar">
                <h2>Simpel Hearder</h2>
                <div className="link">
                    <ul className="NavList">
                        {links.map((link) => 
                        <li key={link.toString}>
                            <button >{link}</button>
                        </li>   
                        )}
                    </ul>
                </div>
            </nav>
    )
}

export default NavbarPage;