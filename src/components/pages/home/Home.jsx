import React from 'react'
import './home.scss'
import Header from '/src/components/layouts/header/Header'
import Servicecard from '/src/components/pages/home/Servicecard'
import Cta from '/src/components/layouts/Cta'
import { Link } from 'react-router-dom'
import Contactform from '/src/components/layouts/contact/Contactform'
import Newsletter from '/src/components/layouts/newsletter/Newsletter'
import Footer from '/src/components/layouts/footer/Footer.jsx'
function Home() {
  return (
    <div>
      <Header />
      <main className='home-main'>
        <div className="hero">
            <div className="hero-wrapper">
                <div className="hero-overlay"></div>
                <img src="/assets/riaf-1.jpg" alt="" />
                <div className="hero-text-outer-wrapper">
                <div className="hero-text-container">
                    <h1>Help us fight for a better future</h1>
                    <p>Join us in our fight to end poverty, protect the environment, and ensure the rights of all people.</p>
                    <button className="btn">Donate</button>
                </div>
                </div>
            </div>
        </div>
        <div className="our-partners">
            <div className="our-partners-wrapper">
                <h2>Our Partners</h2>
                <div className="partners-wrapper">
                    <div className="partner-card">
                        <img src="/assets/Adidas@2x.jpg" alt="" />
                    </div>
                    <div className="partner-card">
                        <img src="/assets/coffee@2x.jpg" alt="" />
                    </div>
                    <div className="partner-card">
                        <img src="/assets/Dell@2x.jpg" alt="" />
                    </div>
                    <div className="partner-card">
                        <img src="/assets/Foods@2x.jpg" alt="" />
                    </div>
                    <div className="partner-card">
                        <img src="/assets/freeman@2x.jpg" alt="" />
                    </div>
                    <div className="partner-card">
                        <img src="/assets/google@2x.jpg" alt="" />
                    </div>
                    <div className="partner-card">
                        <img src="/assets/KFC@2x.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="vision-card">
            <div className="vision-card-wrapper">
                <div className="vision-card-text">
                    <h2>
                        Welcome to RIA Foundation
                    </h2>
                    <p>
                        Our vision is a world where all people can live in dignity, freedom, and peace. We work to create a world where everyone has the opportunity to thrive. We believe that by working together, we can create a better future for all. Join us in our fight to end poverty, protect the environment, and ensure the rights of all people.
                    </p>
                    <img src="/assets/world-business-distribution-infographic-vector.png" alt="" />
                    <span>
                        We run a 100% donation model, which means that every dollar you donate goes directly to the cause. We are committed to transparency and accountability, and we are proud to be recognized as a top-rated charity by Charity Navigator.
                    </span>
                    <button className="btn">
                        Come volunteer with us and make a difference
                    </button>
                </div>
            </div>
        </div>
        <div className="our-cause">
            <div className="our-cause-wrapper">
                <h2>Our Aims</h2>
                <div className="cause-container">
                    <Servicecard
                        image="/assets/riaf-8.jpg"
                        alt="the issues"
                        title="The Issues"
                        description="We work to address the root causes of poverty, inequality, and injustice. Our programs focus on education, health, and economic empowerment."
                        buttonText="Learn more"
                    />
                    <Servicecard
                        image="/assets/riaf-6.jpg"
                        alt="our work"
                        title="Our Work"
                        description="We work to create a world where everyone has the opportunity to thrive. Our programs focus on education, health, and economic empowerment."
                        buttonText="Learn more"
                    />
                    <Servicecard
                        image="/assets/riaf-5.jpg"
                        alt="our impact"
                        title="Our Impact"
                        description="We are committed to transparency and accountability. We are proud to be recognized as a top-rated charity by Charity Navigator."
                        buttonText="Learn more"
                    />
                </div>
            </div>
        </div>
        <Cta 
            pic="/assets/riaf-2.jpg"
            alt="cta"
            title="Give today and join our community of world changers"
            buttonText="Donate"
        />
        <div className="our-stories">
            <div className="our-stories-wrapper">
                <div className="story-card-carousel">
                    <div className="story-card">
                        <div className="story-card-image-wrapper">
                            <img src="/assets/riaf-4.jpg" alt="" />
                        </div>
                        <div className="story-carousel-wrapper">
                            <h3>
                               Our stories
                            </h3>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A minima veniam exercitationem assumenda aliquam omnis officiis at, quasi commodi facilis. Explicabo modi non necessitatibus dolores maxime consectetur soluta! Expedita quidem commodi consequuntur similique voluptatem quos, atque, error voluptatibus et est ea culpa maiores eum quae nostrum nam adipisci eaque fuga.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="slider-dots">
                  <div className="slider-wrapper">
                    <div className="dot"></div>
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
            </div>
        </div>
        <Cta 
            pic="/assets/riaf-7.jpg"
            alt="women and men"
            title="Join us to volunteer and make a difference"
            buttonText="Donate"
        />
        <Contactform />
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}

export default Home