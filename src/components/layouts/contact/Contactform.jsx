import './contactform.scss'

function Contactform() {
  return (
    <div className='contact-us'>
        <div className="contact-us-wrapper">
            <h2>
                Contact Us
            </h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Country/City" />
                <textarea placeholder="Tell us about how you want to make a difference"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
  );
}

export default Contactform;