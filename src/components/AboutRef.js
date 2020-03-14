import React from "react";
import "./AboutRef.css";
import SolutionsRef from "./SolutionsRef";
// import { BrowserRouter as R, Link } from "react-router-dom";

import "./MediaQuery.css";

export default function AboutRef() {
  // const linkTo = () => {
  //   patch = (
  //     <R>
  //       <Route path='/about' exact component={About} />;
  //     </R>
  //   );
  // };
  return (
    <section className='containerWrap'>
      <div className='wrapper'>
        <h2 id='wrapHead'>Our Company</h2>
        <p>
          We are a venue finding service for events, group bookings and hotel
          <br />
          reservations. From inception right through to delivery,we serve as a
          <br />
          one stop shop for all your hotel needs.
        </p>
        <p>
          With 10 years background in the hotel business, we understand that
          <br />
          every booking is unique and different in it's own right. Whether it
          <br />
          is a small group of individuals looking for a hotel stay, or a large
          <br />
          event for 1000+ delegates, we will source the perfect venue, that
          <br />
          meets all your requirements to perfection.
        </p>
        <p>Let us make your business our business.</p>
        <div id='wrapContent'>Read More</div>
      </div>
      <SolutionsRef />
    </section>
  );
}
