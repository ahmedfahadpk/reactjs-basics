import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    likes: 0
  };

  addLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  disLike = () => {
    this.setState({
      likes: this.state.likes - 1
    });
  };

  Reset = () => {
    this.setState({likes: 0});
  };

  render() {
    return (
      <div>
        <h1 className={this.state.likes === 0 ? 'likes' : this.state.likes % 2 === 0 ? 'likes even' : 'likes odd'}> Total Likes: {this.state.likes}</h1>
        <button onClick={this.addLike}>Like</button>
        <button onClick={this.disLike}>NotLike</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  };
};

export default App;
