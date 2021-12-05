import React, { useState } from "react";
import axios from "axios";

const IndexPage = () => {
  const [status, setStatus] = useState("initial");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("pending");
    setMessage("");

    try {
      // Send data to the function,
      // await the result.
      const { data } = await axios.post("/api/time-travel", {
        year: event.target.elements.year.value,
        city: event.target.elements.city.value,
      });
      setMessage(data.message);
      setStatus("fulfilled");
    } catch (error) {
      setMessage(error.response?.data?.message || error.message);
      setStatus("failed");
    }
  };

  const isDisabled = status === "pending";
  // function popUpOutseta(){
  //   console.log('pop Up from your box 🃏 joker 🃏 ')
  // }
  return (
    <main>
    <div>
    <a href="href=https://timeship.outseta.com/auth?widgetMode=register#o-anonymous">Pop up from your box 🃏 sign-up joker 🃏 </a>
      <br />
      <br />
    <a href="https://timeship.outseta.com/auth?widgetMode=login#o-anonymous">Pop up from your box 🃏 login joker 🃏 </a>
      <br />
      <br />
    <a href="https://timeship.outseta.com/profile#o-authenticated">Pop up from your box 🃏 profile joker 🃏 </a>
      <br />
      <br />
    <a href="/#o-logout-link">Pop up from your box 🃏 log out joker 🃏 </a>
    <br />
    <br />
    </div>
      <header>
        <h1>Ruby's TimeShip</h1>
        <p>
          Your mission: Stop your enemies from locating Lillian The Pirate Princess before you. So
          you can bring her back to 1554 and save Ruby's sister, Princess
          Lizabeth from prison.
        </p>
      </header>


      <form onSubmit={handleSubmit}>
        <fieldset disabled={isDisabled}>
          <p>
            <label htmlFor="year">Year: </label>
            <br />
            <input required type="number" id="year" name="year" />
          </p>

          <p>
            <label htmlFor="city">City: </label>
            <br />
            <input required type="text" id="city" name="city" />
          </p>

          <p>
            <button>Let's Travel</button>
          </p>
        </fieldset>

        <p>
          <br />
          <strong>
            {status === "pending" && <>Hold on... </>}
            {status === "failed" && <>Hold up! </>}
            {status === "fulfilled" && <>Woosh! </>}
          </strong>
          <br />
          {message && <span>{message}</span>}
        </p>
      </form>
    </main>
  );
};

export default IndexPage;
