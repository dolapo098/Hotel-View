import React, { Component } from "react";
import "./Home.css";
import "./MediaQuery.css";
import AboutRef from "./AboutRef";
import Header from "./Header";

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <section className='layout'>
            <div className='textLayout'>
              <h1>Are you looking for a venue ?</h1>
              <p id='wordLayout'>
                We monitor industry rates daily, we won’t be beaten on price!
              </p>
            </div>
          </section>
          <AboutRef />
        </Header>
      </React.Fragment>
    );
  }
}
