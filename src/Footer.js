import React from "react";
// Assuming logo.png is in the same folder as JS file
 import logo from './image_logo.png';
 

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
   render() {
     return (
         <div className="div_footer">

            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="div_logo">
                    <img src={logo} className="image_logo" alt="logo"/>
                  </div>
                </div>
                <div className="col-8">
                  <div className="div_information">
                    bonjur
                  </div>
                </div>
              </div>
             </div>

          </div>
     );
   }
}
export default Footer;

