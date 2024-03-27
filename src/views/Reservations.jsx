import React, { useState } from "react";
import "../components/css/Reservations.css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const timeOptions = [
  "17:00",
  "18:00",
  "18:30",
  "19:30",
  "20:00",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
];

const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section id="reservations">
      {!isSubmitted ? (
        <>
          <div id="reservationHeader">
            <h1>Table reservation</h1>
          </div>

          <form onSubmit={handleForm}>
            <div className="formItem">
              <label>Date:</label>
              <input type="date" required />
            </div>

            <div className="formItem">
              <label>Time:</label>
              <select required>
                {timeOptions.map((opt, index) => (
                  <option key={index} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div className="formItem">
              <label>Guests:</label>
              <input type="number" min={1} max={10} required />
            </div>
            <button type="submit" className="reservationBtn">
              Reserve a table!
            </button>
          </form>
        </>
      ) : (
        <div id="tableReserved">
          <FaCheckCircle size={50} />
          <h2>Your reservation has been confirmed!</h2>
          <p>You will receive an email with all the details.</p>
          <div id="buttonsContainer">
            <Link to="/">
              <button className="reservationBtn">Go to Home</button>
            </Link>
            <button
              type="submit"
              className="reservationBtn"
              onClick={() => setIsSubmitted(false)}
            >
              Make another reserve
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reservations;
