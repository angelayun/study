// 用户事件处理
import React, { Component } from "react";

export default class EventHandle extends Component {
  

  constructor(props) {
    super(props)

    this.state = {
        name: ""
      };

      this.handleChange1 = this.handleChange1.bind(this);
  }
  handleChange1(e) {
    this.setState({ name: e.target.value });
  }
  handleChange2 = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleChange3(e) {
    this.setState({ name: e.target.value });
  }
  handleChange4(e) {
    this.setState({ name: e.target.value });
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
        //   onChange={this.handleChange1}
        //   onChange={this.handleChange2}
        // onChange={this.handleChange3.bind(this)}
        onChange={e => this.handleChange4(e)}
        />
        <p>{this.state.name}</p>
      </div>
    );
  }
}
