import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Auth extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Auth</h1>
        <Link to="/login">
          <h2>Log In</h2>
        </Link>
        <Link to="/register">
          <h2>Register</h2>
        </Link>
      </div>
    );
  }
}
