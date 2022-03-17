import React from "react";
// Assuming logo.png is in the same folder as JS file
 import logo from './image_logo.png';
 

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
   render() {
     return (
         <div className="div-footer">

            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="div-logo">
                    <img src={logo} className="image_logo" alt="logo"/>
                  </div>
                </div>
                <div className="col-8">
                  <div className="div-information">
                    <p>Nous sommes une équipe d'ingénieur intéressé par le domaine du drone.</p>
                    <p>Voici notre site d'information et de documentation sur le domaine.</p>
                  </div>
                </div>
              </div>
             </div>

          </div>
     );
   }
}
export default Footer;

