import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { FaInfoCircle } from 'react-icons/fa'
import { MdSend, MdThumbUp, MdCheckCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Regular Expressions...
const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_ ]{3,23}$/;
const MESSAGE_REGEX = /^[a-zA-Z][a-zA-Z0-9-_!@#$%&*(){}?<>:;'",./ ]{9,210}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const SendMail = () => {
  const navigate = useNavigate();

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [message, setMessage] = useState("");
  const [validMessage, setValidMessage] = useState(false);
  const [messaeFocus, setMessaeFocus] = useState(false);

  //success
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = MESSAGE_REGEX.test(message);
    setValidMessage(result);
  }, [message]);

  return (
    <>
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
          <button
            disabled={!validName || !validEmail || !validMessage ? true : false}
            onClick={() => navigate("/")}
          >
            Continue
          </button>
        </section>
      ) : (
        <section className="sendmail-section">
          <h1 className="display-1">
            Send a <span>mail</span>
          </h1>
          <form>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              ref={nameRef}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setNameFocus(true)}
              onBlur={() => setNameFocus(false)}
            />

            {/* Warning */}

            <p
              id="uidnote"
              className={
                !nameFocus && !validName && name ? "instructions" : "offscreen"
              }
            >
              <FaInfoCircle />
              This field must not be less than 5 characters
            </p>

            <label for="email">Email</label>
            <input
              type="email"
              name="name"
              id="name"
              placeholder="Enter your email"
              ref={emailRef}
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />

            {/* Warning */}

            <p
              id="emailnote"
              className={
                !emailFocus && !validEmail && email
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FaInfoCircle />
              Invalid email format
            </p>

            <label for="message">Message</label>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="type your message..."
              ref={messageRef}
              onChange={(e) => setMessage(e.target.value)}
              required
              aria-invalid={validMessage ? "false" : "true"}
              aria-describedby="messagenote"
              onFocus={() => setMessaeFocus(true)}
              onBlur={() => setMessaeFocus(false)}
            ></textarea>

            {/* Warnings... */}

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
            <br />

            <div className="btn-div">
              <button onClick={() => setSuccess(true)}>
                Send <MdSend />{" "}
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default SendMail;
