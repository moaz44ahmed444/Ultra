import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarSection, UlList, Logo, LogoText, ListItem, A, LinkItem } from './style.js';

function Navbar() {
  return (
    <NavbarSection >
            
      <div className="container">
          
          <Logo >
              <LogoText >Ultra Profile</LogoText>
          </Logo>
                    
          <UlList>
              <ListItem><LinkItem to="/">Home</LinkItem></ListItem>
              <ListItem><A href="#">Work</A></ListItem>
              <ListItem><A href="#">Portfolio</A></ListItem>
              <ListItem><A href="#">Resume</A></ListItem>
              <ListItem><A href="#">About</A></ListItem>
              <ListItem><LinkItem to="/contact">Contact</LinkItem></ListItem>
          </UlList>
      </div>
    </NavbarSection>
  )
}
 
export default Navbar