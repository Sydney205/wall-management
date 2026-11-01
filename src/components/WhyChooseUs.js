import React from "react";
import Navbar from "./WhiteNav";
import { useNavigate } from "../lib/router-compat";
import { FaCheckCircle, FaChevronRight, FaRegThumbsUp } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import Footer from "./Footer";

const WhyChooseUs = ({ scrollToTop }) => {
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/contact");
    scrollToTop();
  };

  return (
    <>
      <Navbar />
      <section className="why-choose-us-section">
        <article className="what-makes-us-unique" id="unique-section">
          <div className="heading-logo">
            <div className="line"></div>
            <FaRegThumbsUp size={"3rem"} color="var(--dark-blue)" />
            <div className="line"></div>
          </div>
          <h1 className="display-2">
            <span className="who">What</span> makes us{" "}
            <span className="are">unique</span>
          </h1>

          <p className="heading-text">
            We seek out specifically challenging campaigns so that we can truly
            leverage our creative, energetic and
            <br />
            collaborative approach and propel those commitments to success
          </p>

          <div className="objectives-symbols">
            <div className="objectives">
              <p className="header-text" style={{fontWeight: 'bold',}}>Our objectives...</p>
              <p>
                Our objectives is to build well and manage well within the
                framework of fast growing population of master-pieces in Nigeria
                and introduce professionalism into the works at hand, providing
                qualitative services.
                <br />
                In doing this, we meet each need according to the structure of
                the building within the reasonable cost.
              </p>
            </div>

            <div className="symbols">
              <p className="header-text" style={{fontWeight: 'bold',}}>Our career...</p>
              <p>
                Our career has been marked by progressive promotions with
                challenging assignments. This is a key reason why we are
                interested in WALL MANAGEMENT to work as a team.{" "}
              </p>
            </div>
          </div>
        </article>
        <div
          style={{
            marginTop: "3rem",
          }}
          className="our-uniqueness"
        >
          <h1
            className="display-6"
            style={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Our strategy...
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "8rem",
            }}
            className='info'
          >
            <p style={{ width: "30vw", textAlign: "left" }}>
              Quality and total commitment to excellence are the common and
              pervasive element in all Wall Management services. Besides to
              achieve quality service in her objectives. Wall Management is in
              direct communication with client.
            </p>
            <img
              src={`/images/Animated Images/renovation.png`}
              alt="future"
              style={{ width: "40vw", height: "60vh" }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="our-uniqueness"
        >
          <h1
            className="display-6"
            style={{ fontWeight: "bold", marginBottom: "2rem" }}
          >
            Team Work and Creativity
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "14rem",
            }}
            className='info'
          >
            <p style={{ width: "30vw", textAlign: "left" }}>
              Wall Management's most valuable assets are the hard-working and
              highly motivated workers. At Wall Management, our management do
              their best to invent new ideas that benefit your heart desire and
              Modern ideas, to accept challenges, to aim for the highest level
              of efficiency and to deliver within the time frame
            </p>
            <img
              src={`/images/Animated Images/team.png`}
              alt="future"
              style={{ width: "30vw", height: "40vh" }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "7rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="our-uniqueness"
        >
          <h1
            className="display-6"
            style={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Future Commitment
          </h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              gap: "8rem",
            }}
            className='info'
          >
            <p style={{ width: "30vw", textAlign: "left" }}>
              In the comming years Wall Management will establish itself as a
              Training Company dedicated to bringing latest styles in our
              services to her customers.
            </p>
            <img
              src={`/images/Animated Images/future.png`}
              alt="future"
              style={{ width: "30vw", height: "60vh" }}
            />
          </div>
        </div>

        <div className="heading-logo" style={{ marginTop: "5rem" }}>
          <div className="line"></div>
          <FaCheckCircle size={"3rem"} color="var(--dark-blue)" />
          <div className="line"></div>
        </div>
        <h1
          className="display-2"
          style={{ marginTop: "2rem", marginBottom: "4rem" }}
        >
          <span className="who">We</span> are{" "}
          <span className="are">Certified</span>
        </h1>

        <img
          src={"/images/certificate.jpg"}
          alt="certificate"
          style={{ height: "100vh" }}
        />

        <p
          style={{
            color: "var(--orange)",
            fontSize: "1.2rem",
            width: "50vw",
            textAlign: "center",
          }}
        >
          Hence we look forward to your positive responce to establishing a
          mutually business relationship with you.
        </p>
        <button onClick={nextPage}>
          <MdEmail /> Contact Us <FaChevronRight />
        </button>
      </section>
      <Footer />
    </>
  );
};

export default WhyChooseUs;
