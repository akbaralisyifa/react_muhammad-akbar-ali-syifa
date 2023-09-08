import HeroImage from "../../assets/img/hero_img.png";

const Header = () => {
    return (
        <header>
            <div className="judulHeader">
                <h1>Better Solutions For Your Business</h1>
                <p>We are team of talented designers making websites with Bootstrap</p>
                <ul>
                    <li><a href="" className="link-start">Get Started</a></li>
                    <li><a href="" className="link-watch">Watch Video</a></li>
                </ul>
            </div>
            <div className="heroImage">
                <img src={HeroImage} alt="Hero-Image" />
            </div>
        </header>
    )
}


export default Header;