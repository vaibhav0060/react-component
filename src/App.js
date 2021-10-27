// // import logo from './logo.svg';
// import "./App.css";
// import Title from "./title";
// import Buttons from "./content";
// import { Functional } from "./content";
// import { ClassCompo } from "./content";
// function App() {
//   return (
//     <div className="App">
//       <Title />
//       <Buttons />
//       <div className="flexCompo">
//         <Functional />
//         <ClassCompo />
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";

// Class based
class App extends Component {
  state = {
    name: "Kartik",
    balance: 10000,
  };

  updateBalance = (amount) => {
    this.setState({ balance: amount });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}!</h1>
        <h4>Balance {this.state.balance}</h4>
        <button onClick={() => this.updateBalance(1000000000)}>
          Update Amount
        </button>

        <p>You are a Premium customer</p>
        <p>You are a Regular customer</p>
      </div>
    );
  }
}

// Default export - only one a file
export default App;
