import React, { Component } from 'react';
import { Link } from 'gatsby'
import ResponsiveMenu from 'react-responsive-navbar';

class Menu extends Component {
  render() {

    const ListLink = props => (
        <li style={{ display: `inline-block`, marginRight: `1rem`,  }}>
          <Link to={props.to}>{props.children}</Link>
        </li>
      )

    return (
      <ResponsiveMenu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/aboutme/">About Me</ListLink>
              <ListLink to="/contact/">Contact</ListLink>
          </ul>
        }
      />
    );
  }
}

export default Menu