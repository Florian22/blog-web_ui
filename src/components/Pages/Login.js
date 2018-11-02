import React from "react";
import { Redirect } from 'react-router-dom';
//Redux
import {connect} from "react-redux";
import * as actionCreators from "../../actions/index";


const mapStatetoProps = (state) => {
    return state;
  }

class Login extends React.Component {

constructor(props) {
        super(props);
        this.state = {email: "", password: ""};
        this.onEmailChange = ev => {
            this.setState({...this.state, email: ev.target.value});
        }
        this.onPasswordChange = ev => {
            this.setState({...this.state, password: ev.target.value});
        }
        this.onSubmit = ev => {
            ev.preventDefault();
            this.props.signIn({email: this.state.email, password: this.state.password });
        }
      }

  render() {
    if(this.props.currentuser){
      return <Redirect to={{pathname: '/',}}/>;
    }
    const email = this.state.email.value;
    const password = this.state.password.value;
    return (
      <div>
            <form  onSubmit={ (email, password) => this.onSubmit(email, password)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.onEmailChange.bind(this)} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.onPasswordChange.bind(this)}
                       />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    //disabled={this.props.inProgress}
                    >
                    Sign in
                  </button>

                </fieldset>
              </form>
      </div>
    );
  }
}

export default connect(mapStatetoProps,actionCreators)(Login);