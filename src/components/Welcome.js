import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img src={this.props.imgs} alt="" />
          <p>Name: {this.props.info}</p>
        </div>
      </>
    );
  }
}
export default Welcome;
