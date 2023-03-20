import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaChevronRight, FaRegThumbsUp } from "react-icons/fa";
import Footer from "./Footer";

const WhyChooseUs = () => {
  const navigate = useNavigate();

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
              <p className="header-text">Our objectives...</p>
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
              <p className="header-text">Our career...</p>
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="display-6" style={{ fontWeight: "bold" }}>
            Our strategy...
          </h1>
          <p style={{ width: "50vw", textAlign: "center" }}>
            Quality and total commitment to excellence are the common and
            pervasive element in all Wall Management services. Besides to
            achieve quality service in her objectives. Wall Management is in
            direct communication with client.
          </p>
        </div>
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="display-6" style={{ fontWeight: "bold" }}>
            Team Work and Creativity
          </h1>
          <p style={{ width: "60vw", textAlign: "center" }}>
            Wall Management's most valuable assets are the hard-working and
            highly motivated workers. At Wall Management, our management do
            their best to invent new ideas that benefit your heart desire and
            Modern ideas, to accept challenges, to aim for the highest level
            of efficiency and to deliver within the time frame
          </p>
        </div>
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="display-6" style={{ fontWeight: "bold" }}>
            Future Commitment
          </h1>
          <p style={{ width: "50vw", textAlign: "center" }}>
            In the comming years Wall Management will establish itself as a
            Training Company dedicated to bringing latest styles in our services
            to her customers.
          </p>
        </div>
        <div className="heading-logo" style={{marginTop: '5rem'}}>
          <div className="line"></div>
          <FaCheckCircle size={"3rem"} color="var(--dark-blue)" />
          <div className="line"></div>
        </div>
        <h1 className="display-2" style={{marginTop: '2rem', marginBottom: '4rem'}}>
          <span className="who">We</span> are{" "}
          <span className="are">Certified</span>
        </h1>

        <img
          src={process.env.PUBLIC_URL + "/images/certificate.jpg"}
          alt="certificate"
          style={{height: '100vh'}}
        />

        <button onClick={() => navigate("/ourworks")}>
          Our Works <FaChevronRight />
        </button>
      </section>
      <Footer />
    </>
  );
};

export default WhyChooseUs;
