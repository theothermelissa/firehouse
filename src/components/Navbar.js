import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import phoneNumber from '../img/phoneNumber.svg'
import { AnchorLink } from "gatsby-plugin-anchor-links"


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    console.log("Logo: ", logo);
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          {/* <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Firehouse Fundraisers" style={{ height: '110px' }} />
            </Link>
          </div> */}
          <div
            className={`navbar-burger burger ${this.state.navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" to="/">
                Home
              </Link>
              {/* <a href="#features">Features</a> */}
              <AnchorLink to="/#calculator" title="Profit Calculator" className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" >
                <span>Calculator</span>
              </AnchorLink>
              <AnchorLink to="/#about" title="About Us" className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" >
                <span>About</span>
              </AnchorLink>
              <AnchorLink to="/#schedule" title="Schedule Your Fundraiser" className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" >
                <span>Schedule</span>
              </AnchorLink>
              {/* <Link className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" to="/reviews">
                Reviews
              </Link>
              <Link className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" to="/products">
                Our Products
              </Link>
              <Link className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" to="/resources">
                Resources
              </Link> */}
              {/* <Link className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" to="/products">
                Products
              </Link>
              <Link className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" to="/blog">
                Blog
              </Link>
              <Link className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" to="/contact">
                Contact
              </Link>
              <Link className={"navbar-item is-hoverable is-tab"} activeClassName="is-active" to="/contact/examples">
                Form Examples
              </Link> */}
            </div>
            <div className="navbar-end has-text-centered">
              <img src={phoneNumber} alt="(205)851-1448" style={{ display: 'flex', alignSelf: 'center', height: '2.5em' }} /> 
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
