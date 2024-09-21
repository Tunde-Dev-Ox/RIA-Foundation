import './newsletter.scss'

function Newsletter() {
    return (
        <div className="newsletter">
           <div className="newsletter-wrapper">
                <h2>Subscribe to our newsletter</h2>
                <p>Get the latest news and updates from us</p>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </form>
            </div>
        </div>
    );
}

export default Newsletter;