import React from "react";

import Header from"./Header";
import Content from "./Content";
import Footer from "./Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   render() {
     return (
         <div>
           <div>
              <Header/>
            </div>

            <div>
              <Content/>
            </div>
            
            <div>
              <Footer/>
            </div>
         </div>
     );
  }
}
export default App;

