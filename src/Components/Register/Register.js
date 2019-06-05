import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../ducks/reducer";
import { test } from "../../ducks/reducer";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.username);
    console.log(this.state.password);
  }

  handleClick(e) {
    console.log("SUBMITTEEEDDDD");
    e.preventDefault();

    this.props.registerUser(this.state.username, this.state.password);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>REGISTER!!</h1>
        <form autocomplete="off">
          <div>
            <input
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.username}
              name="username"
            />

            <input
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
            />
          </div>

          <button onClick={this.handleClick}> Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  console.log(reduxState);
  return {
    reducer: reduxState.reducer.username
  };
};
//   console.log(reduxState);
//   return {
//     username: reduxState.username
//   };
// };

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
