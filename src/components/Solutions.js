import React, { Component } from "react";
import "./Solutions.css";
import Header from "./Header";
import Service from "./Service";

export default class Solutions extends Component {
  render() {
    return (
      <Header>
        <div className='gridContainer'>
          <div>
            <img src alt='view'></img>
            <article>
              <h1>Boardroom Style</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quidem!
              </p>
            </article>
          </div>
          <div>
            <img src alt='view'></img>
            <article>
              <h1>Hollow Square Style</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quidem!
              </p>
            </article>
          </div>
          <div>
            <img src alt='view'></img>
            <article>
              <h1>U Shaped Style</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quidem!
              </p>
            </article>
          </div>
          <div>
            <img src alt='view'></img>
            <article>
              <h1>Auditorium Style</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quidem!
              </p>
            </article>
          </div>
          <div>
            <img src alt='view'></img>
            <article>
              <h1>Classroom Style</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quidem!
              </p>
            </article>
          </div>
          <div>
            <img src alt='view'></img>
            <article>
              <h1>Banquet Style</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quidem!
              </p>
            </article>
          </div>
        </div>
        <Service />
      </Header>
    );
  }
}
