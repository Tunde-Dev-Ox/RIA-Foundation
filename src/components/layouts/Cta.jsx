import '/src/components/pages/home/home.scss';
function Cta({pic, alt, title, buttonText}) {
    return (
        <div className="cta-session">
            <div className="cta-wrapper">
                <div className="cta-overlay"></div>
                <img src={pic} alt={alt} />
                <div className="cta-text">
                  <div className="cta-text-container">
                    <h2>
                        {title}
                    </h2>
                    <button className="btn">
                        {buttonText}
                    </button>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Cta;