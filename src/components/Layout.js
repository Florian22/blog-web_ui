import React from "react";
import Header from "./Header/Header";


export default class Layout extends React.Component {
  /*constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }*/

  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}