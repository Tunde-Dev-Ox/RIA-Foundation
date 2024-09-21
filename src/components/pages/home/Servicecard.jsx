import './home.scss'

function Servicecard({ image, alt, title, description, buttonText}) {
  return (
    <div className="service-card">
        <img src={image} alt={alt} />
        <h3>
            {title}
        </h3>
        <p>
            {description}
        </p>
        <button>
            {buttonText}
        </button>
    </div>
  );
}

export default Servicecard;