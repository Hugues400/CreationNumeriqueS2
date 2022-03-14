import React from "react";
import { Alert } from "react-alert";

import Footer from "./Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   render() {
     return (
         <div>
           <h1>Bonjour</h1>
           <h1 className="titre1">Hello</h1>

           <div>
             <Footer/>
           </div>
         </div>
     );
  }
}
export default App;

