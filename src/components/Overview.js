import React from "react";
import { useNavigate } from '../lib/router-compat'

const Overview = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <section className="overview-section">
      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          marginTop: '3rem',
          marginBottom: '1rem',
        }}
        className='welcome-div'
      >
        <div
          style={{
            width: "50vw",
            height: "100%",
          }}
          className='img-div'
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={`/images/Animated Images/building-construction.png`}
            alt="construction"
          />
        </div>
        <div
          style={{
            width: "50vw",
            height: "100%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            textAlign: "left",
          }}
          className='wordings-div'
        >
          <span
            style={{
              textAlign: "left",
              color: "var(--orange)",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            About Us
          </span>
          <h3
            style={{
              fontWeight: "bold",
              color: "var(--dark-blue)",
              fontSize: "35px",
            }}
          >
            Welcome to Wall Management
          </h3>
          <p>
            The aforementioned company formed by a group of professionals <br />
            is thrilled to lead a complex initiatives that brings promises and
            hope for those clients who desperately look for it.
            <br />
            WALL MANAGEMENT is built into two divisions Building & Branding as
            to cause excellent and effective services.
            <br />
            The Building aspect includes, Innovation and Renovation with every
            area of structural designs while, the Branding involves,
            Printing/Decorations/Sculptural works & Advertisement design/Visual
            works.
          </p>
          <button
            style={{
              backgroundColor: "var(--purple)",
              color: "white",
              padding: "10px",
              border: "2px solid var(--purple)",
              borderRadius: "5px",
              borderColor: "var(--purple)",
            }}
            onClick={() => {
              navigate('/about')
              scrollToTop();
            }}
          >
            View more...
          </button>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "row-reverse",
        }}
        className='services-div'
      >
        <div
          style={{
            width: "50vw",
            height: "100%",
          }}
          className='img-div'
        >
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src={`/images/gal22.jpg`}
            alt="room"
          />
          
        </div>
        <div
          style={{
            width: "50vw",
            height: "100%",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "left",
          }}
          className='wordings-div'
        >
          <span
            style={{
              textAlign: "left",
              color: "var(--orange)",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Our Services
          </span>
          <h3
            style={{
              fontWeight: "bold",
              color: "var(--dark-blue)",
              fontSize: "35px",
            }}
          >
            What we do
          </h3>
          <ul>
            <li>GENERAL OFFICE INNOVATION/RENOVATIONS</li>
            <li>3D WORKS (FLOORING, RUFFING, PANEL)</li>
            <li>DESIGN/SCULPTURAL WORKS</li>
            <li>BRICKS LAYING</li>
            <li>POP/SCREEDING</li>
            <li>PAINTINGS</li>
            <li>STONE DESIGN</li>
            <li>FURNITURE WORKS</li>
          </ul>
          <button
            style={{
              backgroundColor: "var(--purple)",
              color: "white",
              padding: "10px",
              border: "2px solid var(--purple)",
              borderRadius: "5px",
              borderColor: "var(--purple)",
            }}
            onClick={() => {
              navigate('/services')
              scrollToTop();
            }}
          >
            View more...
          </button>
        </div>
      </div>

      <article
        style={{
          width: "100%",
          height: "max-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vh",
          textAlign: "center",
          paddingTop: "6rem",
        }}
        className='works-div'
      >
        <div id="home-grid">
          <span
            style={{
              textAlign: "left",
              color: "var(--orange)",
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Our work's Gallery
          </span>
          <h3
            style={{
              fontWeight: "bold",
              color: "var(--dark-blue)",
              fontSize: "35px",
            }}
          >
            Check out our Gallery
          </h3>
          <div className="gallery">
            <img src={"/images/gal2.jpg"} alt="gal1" />
            <img
              src={"/images/gal11.jpg"}
              alt="gal2"
            />
            <img
              src={"/images/gal23.jpg"}
              alt="gal3"
            />
            <img src={"/images/gal1.jpg"} alt="gal4" />
            <img
              src={"/images/gal17.jpg"}
              alt="gal5"
            />
            <img
              src={"/images/gal20.jpg"}
              alt="gal6"
            />
            <img
              src={"/images/gal21.jpg"}
              alt="gal7"
            />
            <img
              src={"/images/gal25.jpg"}
              alt="gal8"
            />
          </div>
          <button
            style={{
              backgroundColor: "var(--purple)",
              color: "white",
              padding: "10px",
              border: "2px solid var(--purple)",
              borderRadius: "5px",
              marginTop: '2rem',
            }}
            onClick={() => {
              navigate('/ourworks')
              scrollToTop();
            }}
          >
            View more...
          </button>
        </div>
      </article>
      <div
        style={{
          width: "100%",
          height: "max-content",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "6rem",
        }}
        className='contact-div'
      >
        <h2
         style={{
            fontWeight: "bold",
            color: "var(--orange)",
            fontSize: "40px",
          }}
        >Get in Touch with Us</h2>
        <p style={{fontWeight: '500', width: '60vw',}}>
          It is our firm belief that we can satisfy your requirements in
          relation to professional building and branding services, we therefore
          request that you should establish a working relationship with us.
        </p>
        <button
            style={{
              backgroundColor: "var(--orange)",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              borderColor: "var(--purple)",
              marginTop: '2rem',
            }}
            onClick={() => {
              navigate('/contact')
              scrollToTop();
            }}
          >
            Contact us
          </button>
      </div>
    </section>
  );
};

export default Overview;
