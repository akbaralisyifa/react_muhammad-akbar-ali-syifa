import img from '../../assets/img/hero_img.png'


const LandingPageHeader = () => {
    return (
        <>
        <header>
        <div class="text-header">
            <h1>Better Solutions For Your Business</h1>
            <p>We are team of talented designers making websites with Bootstrap</p>
            <div class="nav-header">
                <a href="" class="nav-get">Get Started</a>
                <a href="">Watch Video</a>
            </div>
        </div>
        <div class="img">
            <img src={img} alt="Hero Image" />
        </div>
    </header>
    <section>
        <div class="poin">
            <h1>Join Our Newsletter</h1>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <form action="">
                <input type="text" />
                <label for="">Subscribe</label>
            </form>
        </div>
    </section>

<footer>
    <div class="contact">
        <div class="alamat">
            <h3>BARRE</h3>
            <p>A108 Adam Street New York, NY 535022 United States</p>
            <p><span>Phone:</span> +1 5589 55488 55</p>
            <p><span>Email:</span> info@example.com</p>
        </div>
        <div class="link">
            <h3>Useful Links</h3>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Service</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div class="service">
            <h3>Our Services</h3>
            <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
            </ul>
        </div>
        <div class="network">
            <h3>Our Social Networks</h3>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="sosmed">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
    </div>
    <div class="copy">
        <p>© Copyright <a href="https://www.linkedin.com/in/akbaralisyifa/" target="_blank">Barre_barr</a>. All Rights Reserved</p>
        <p>Designed by <span class="bootmode">BootstrapMade</span></p>
    </div>
</footer>
        </>
    )
}


export default LandingPageHeader;