import React, { Component } from "react";
import "./Header.css";
import logo from "../images/logo.jpg";
// import FilterNoneIcon from "@material-ui/icons/FilterNone";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <header>
          <span className='logoName'>Everything Venue</span>
        </header> */}
        <nav className='navbar'>
          <ul>
            <li id='logoName'>
              <a href='/'>
                <img src={logo} alt='logo' className='logo'></img>
              </a>
            </li>
            <li id='headerLogo'>
              <span className='logoName'>Everything Venues</span>
            </li>
            <li>
              <a href='/solutions'>Solutions</a>
            </li>
            <li>
              <a href='/news'>News</a>
            </li>
            <li>
              <a href='/clients'>Our Clients</a>
            </li>
            <li>
              <a href='/about'>About Us</a>
            </li>
          </ul>
        </nav>
        {this.props.children}
        <div className='baseline'></div>
      </React.Fragment>
    );
  }
}
