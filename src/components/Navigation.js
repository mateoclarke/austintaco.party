import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Img from "gatsby-image";
import './Navigation.css'


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar = (e) => {
    this.setState({
      collapsed: !this.state.collapsed
    });

  }

  render() {

    const navItemsArray = [
      {
        text: 'About',
        link: '#about',
      },
      {
        text: 'Map',
        link: '#map',
      },
      {
        text: 'Merch',
        link: '#merch',
      },
      {
        text: 'RSVP',
        link: '#rsvp',
      },
    ];

    const GlobalNav = (
      <Nav navbar style={{marginLeft: 'auto'}}>
        { navItemsArray.map(navitem => (
            <NavItem>
              <NavLink href={navitem.link} className={navitem.className} style={navitem.style}>
                {navitem.text}
              </NavLink>
            </NavItem>
          ))}
      </Nav>
    )

    return (
      <div className={`Navigation d-flex flex-column flex-md-row container-fluid`}>
        <Navbar color="faded" expand="lg" light fixed="top" className="Navigation__navbar">
          <div className="row">
            <div className="col-12" style={{ width: '100%' }}>
              <h1 style={{ textAlign: 'right' }}>Tour de Taco</h1>
            </div>
          </div>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            { GlobalNav }
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
