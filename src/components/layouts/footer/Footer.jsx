import { Link } from 'react-router-dom';
import './footer.scss';

function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-top-wrapper">
                        <ul className="footer-ul">
                            <li>
                                <h3>Quick Links</h3>
                            </li>
                            <li>
                                <Link to="/issue">Video</Link>
                            </li>
                            <li>
                                <Link to="/about">Podcast</Link>
                            </li>
                            <li>
                                <Link to="/our-impact">Publication</Link>
                            </li>
                            <li>
                                <Link to="/get-involved">e-Newsletter</Link>
                            </li>
                        </ul>
                        <ul className="footer-ul">
                            <li>
                                <h3>About us</h3>
                            </li>
                            <li>
                                <Link to="/issue">Our impacts</Link>
                            </li>
                            <li>
                                <Link to="/about">Our stories</Link>
                            </li>
                            <li>
                                <Link to="/our-impact">Events</Link>
                            </li>
                            <li>
                                <Link to="/get-involved">Get involved</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="underline"></div>
                    <div className="footer-bottom-wrapper">
                        <div className="footer-bottom-left">
                            <p>&copy; 2024 Revival in Africa. All rights reserved.</p>
                        </div>
                        <div className="social-media">
                            <img src="/assets/facebook-3-logo-svgrepo-com.svg" alt="facebook" />
                            <img src="/assets/instagram-2016-logo-svgrepo-com.svg" alt="instagram" />
                            <img src="/assets/twitter-3-logo-svgrepo-com.svg" alt="twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;