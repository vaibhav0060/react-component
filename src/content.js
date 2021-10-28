import "./App.css";
import { Component } from "react";

function Buttons() {
  // function  functionBox() {
  //     let condition = true ;
  //     console.log(condition);
  //     console.log("working");
  //   };
  return <div className="Buttons"></div>;
}

export default Buttons;

// function Functional() {
//   // function functionBox() {
//   //   var condition = true;
//   //   // console.log(condition);
//   //   console.log("working");
//   // }

// }

// import React from 'react'

function Functional() {
  return (
    <div
      className="functional"
      style={{
        margin: "100px 0px",
        height: "254px",
        width: "450px",
        border: "2px solid black",
        backgroundColor: "deeppink",
        borderRadius: "25px",
      }}
    >
      <h1>This is created using Functional Based Components.</h1>
      <p> This is done using external css</p>
      <p style={{ color: "white" }}>This is done using inline css</p>
    </div>
  );
}

export { Functional };

class ClassCompo extends Component {
  render() {
    return (
      <div
        className="functional"
        style={{
          margin: "100px 0px",
          height: "254px",
          width: "450px",
          border: "2px solid black",
          backgroundColor: " #ec14ff",
          borderRadius: "25px",
        }}
      >
        <h1>This is created using Class Based Components.</h1>
        <p> This is done using external css</p>
        <p style={{ color: "white" }}>This is done using inline css</p>
      </div>
    );
  }
}
export { ClassCompo };

// import React, { Component } from "react";

// Class based
// class App extends Component {
// 	state = {
// 		name: "Kartik",
// 		balance: 10000,
// 	};

// 	updateBalance = (amount) => {
// 		this.setState({ balance: amount });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello {this.state.name}!</h1>
// 				<h4>Balance {this.state.balance}</h4>
// 				<button onClick={() => this.updateBalance(1000000000)}>
// 					Update Amount
// 				</button>

// 				<p>You are a Premium customer</p>
// 				<p>You are a Regular customer</p>
// 			</div>
// 		);
// 	}
// }

// // Default export - only one a file
// export default App;
