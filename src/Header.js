import React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";


import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends React.Component {
   render() {
     return (
        <div className="div-header">
            <div className="div-titre-page">
                <h1 className="titre_page">Notre site d'information sur les drones dans tous les usages</h1>
            </div>
            <div className="div-nav">
                <Navbar className="nav">
                    <NavLink href="home" className="link-nav">Home</NavLink>
                    <NavLink href="home" className="link-nav">Pourquoi avoir choisi ce sujet ?</NavLink>
                    <NavLink href="home" className="link-nav">About us</NavLink>
                </Navbar>
                <a class="button" style={{color:red}} href="SiteHTML/testParticle.html">Formation</a>
            </div>
            
        </div>
     );
   }
}
export default Header;

