import React, { useState, useEffect, useRef } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { MdSend, MdThumbUp, MdCheckCircle, MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Regular Expressions...
const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{2,23}$/;
const MESSAGE_REGEX = /^[a-zA-Z][a-zA-Z0-9-_!@#$%&*(){}?<>:;'",./ ]{9,500}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PHONE_REGEX = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const Contact = () => {
  const navigate = useNavigate();

  const form = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const subject_name = useRef();
  const city_name = useRef();
  const messageRef = useRef();

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [city, setCity] = useState("");
  const [validCity, setValidCity] = useState(false);
  const [cityFocus, setCityFocus] = useState(false);

  const [subject, setSubject] = useState("");
  const [validSubject, setValidSubject] = useState(false);
  const [subjectFocus, setSubjectFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(false);
  const [messaeFocus, setMessaeFocus] = useState(false);

  //success
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = NAME_REGEX.test(firstName);
    setValidFirstName(result);
  }, [firstName]);

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = NAME_REGEX.test(city);
    setValidCity(result);
  }, [city]);

  useEffect(() => {
    const result = NAME_REGEX.test(subject);
    setValidSubject(result);
  }, [subject]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PHONE_REGEX.test(phone);
    setValidPhone(result);
  }, [phone]);

  useEffect(() => {
    const result = MESSAGE_REGEX.test(message);
    setValidMessage(result);
  }, [message]);

  // Send email function...
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )

      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong, check your connection and try again");
        }
      );
  };

  return (
    <>
      <Navbar />
      {/* Success Page */}

      {success ? (
        <section className="success-section">
          <MdCheckCircle color="#0f0" size={"6rem"} className="tick" />
          <br />
          <div>
            <h1 className="text-center display-3">
              Thanks we got your message.
            </h1>
            <p className="text-center display-6">and</p>
            <p className="text-center display-6">
              We'll send a reply ASAP <MdThumbUp />
            </p>
          </div>
          <button onClick={() => navigate("/")}>Continue</button>
        </section>
      ) : (
        <section className="contact-section" id="contact-section">
          <div className="header-text">
            <TinyLogo logoColor="var(--bg-white)" />
            <h1 className="display-3">
              <MdEmail color="var(--bg-white)" /> Contact Us
            </h1>
          </div>

          <img
            src={`${process.env.PUBLIC_URL}/images/Animated Images/Contact man.png`}
            alt="contact man"
            id="contact-man-img"
          />
          <h1 className="display-2">
            <span>Get </span> in <span>Touch</span>
          </h1>
          <p
            style={{
              textAlign: "center",
              width: "70vw",
              fontSize: "17px",
            }}
          >
            It is our firm belief that we can satisfy your requirements in
            relation to professional building and branding services, we
            therefore request that you should establish a working relationship
            with us.
          </p>
          <p
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontStyle: "italic",
              marginBottom: "3rem",
              color: "gray",
            }}
          >
            Send us a mail
          </p>

          {/* Warnings... */}

          <div
            className="warnings-info"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* firstname info */}

            <p
              id="uidnote"
              className={
                !firstNameFocus && !validFirstName && firstName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Your firstname's too short
            </p>

            {/* lastname info */}

            <p
              id="uidnote"
              className={
                !lastNameFocus && !validLastName && lastName
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Your lastname's too short
            </p>

            {/* email */}

            <p
              id="emailnote"
              className={
                !emailFocus && !validEmail && email
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Invalid email format
            </p>

            {/* Phone */}

            <p
              id="phonenote"
              className={
                !phoneFocus && !validPhone && phone
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Invalid Phone number & Must begin with +
            </p>

            {/* Subject */}

            <p
              id="uidnote"
              className={
                !subjectFocus && !validSubject && subject
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> Subject is needed
            </p>

            {/* city info */}

            <p
              id="uidnote"
              className={
                !cityFocus && !validCity && city ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle /> City is wrong
            </p>

            {/* message info */}
            <p
              id="messagenote"
              className={
                !messaeFocus && !validMessage && message
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle /> minimum of 10 characters and maximun of 100
              characters
            </p>
          </div>
          <form ref={form}>
            <div className="form-input">
              <input
                className={
                  firstNameFocus && !validFirstName && firstName
                    ? "warning-input"
                    : !firstNameFocus && !validFirstName && firstName
                    ? "error-input"
                    : ""
                }
                type="text"
                name="first_name"
                id="first_name"
                placeholder="First Name"
                ref={first_name}
                autoComplete="off"
                onChange={(e) => setFirstName(e.target.value)}
                required
                aria-invalid={validFirstName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)}
              />

              <input
                className={
                  lastNameFocus && !validLastName && lastName
                    ? "warning-input"
                    : !lastNameFocus && !validLastName && lastName
                    ? "error-input"
                    : ""
                }
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Last Name"
                ref={last_name}
                autoComplete="off"
                onChange={(e) => setLastName(e.target.value)}
                required
                aria-invalid={validLastName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
              />

              <input
                className={
                  emailFocus && !validEmail && email
                    ? "warning-input"
                    : emailFocus && !validEmail && email
                    ? "error-input"
                    : ""
                }
                type="email"
                name="user_email"
                id="email"
                placeholder="Email"
                ref={emailRef}
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />

              <input
                className={
                  phoneFocus && !validPhone && phone
                    ? "warning-input"
                    : phoneFocus && !validPhone && phone
                    ? "error-input"
                    : ""
                }
                type={"tel"}
                name="user_phone"
                id="phone"
                placeholder="Phone (+XXX...)"
                ref={phoneRef}
                autoComplete="on"
                onChange={(e) => setPhone(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="phonenote"
                onFocus={() => setPhoneFocus(true)}
                onBlur={() => setPhoneFocus(false)}
              />

              <input
                className={
                  subjectFocus && !validSubject && subject
                    ? "warning-input"
                    : !subjectFocus && !validSubject && subject
                    ? "error-input"
                    : ""
                }
                type="text"
                name="user_subject"
                id="subject"
                placeholder="Subject"
                ref={subject_name}
                autoComplete="off"
                onChange={(e) => setSubject(e.target.value)}
                required
                aria-invalid={validSubject ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setSubjectFocus(true)}
                onBlur={() => setSubjectFocus(false)}
              />

              {/* CITY */}
              <input
                className={
                  cityFocus && !validCity && city
                    ? "warning-input"
                    : !cityFocus && !validCity && city
                    ? "error-input"
                    : ""
                }
                type="text"
                name="user_city"
                id="city"
                placeholder="City Name"
                ref={city_name}
                autoComplete="off"
                onChange={(e) => setCity(e.target.value)}
                required
                aria-invalid={validCity ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setCityFocus(true)}
                onBlur={() => setCityFocus(false)}
              />
            </div>

            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="Send a message"
              ref={messageRef}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-invalid={validMessage ? "false" : "true"}
              aria-describedby="messagenote"
              onFocus={() => setMessaeFocus(true)}
              onBlur={() => setMessaeFocus(false)}
            ></textarea>

            <br />

            <div className="btn-div">
              <button
                disabled={
                  validFirstName &&
                  validLastName &&
                  validEmail &&
                  validPhone &&
                  validSubject &&
                  validCity &&
                  validMessage
                    ? false
                    : true
                }
                onClick={sendEmail}
              >
                Submit <MdSend />{" "}
              </button>
            </div>
          </form>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Contact;
