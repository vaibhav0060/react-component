// import logo from './logo.svg';
import "./App.css";
import Title from "./title";
// import Buttons from "./content";
import { Component } from "react";
import { Functional } from "./content";
import { ClassCompo } from "./content";
// import { render } from "@testing-library/react";
class App extends Component {
  state = {
    functionalVisible: false,
    classVisible: false,
  };
  functionalrender() {
    let functionalVisible = !this.state.functionalVisible;
    this.setState({ functionalVisible });
  }
  classrender() {
    let classVisible = !this.state.classVisible;
    this.setState({ classVisible });
  }
  render() {
    return (
      <div className="App">
        <Title />
        <div className="Buttons">
          <button
            className="button1"
            onClick={this.functionalrender.bind(this)}
          >
            To see styling in Functional component
          </button>
          <button className="button2" onClick={this.classrender.bind(this)}>
            To see styling in Class component
          </button>
        </div>
        <div className="flexCompo">
          {this.state.functionalVisible ? <Functional /> : <div></div>}
          {/* { if (this.state.functionalVisible) {<Functional />} else {<div></div>}} */}
          {this.state.classVisible ? <ClassCompo /> : <div></div>}
        </div>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";

// // Class based
// class App extends Component {
//   state = {
//     name: "Kartik",
//     balance: 10000,
//   };

//   updateBalance = (amount) => {
//     this.setState({ balance: amount });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Hello {this.state.name}!</h1>
//         <h4>Balance {this.state.balance}</h4>
//         <button onClick={() => this.updateBalance(1000000000)}>
//           Update Amount
//         </button>

//         <p>You are a Premium customer</p>
//         <p>You are a Regular customer</p>
//       </div>
//     );
//   }
// }

// // Default export - only one a file
// // export default App;
