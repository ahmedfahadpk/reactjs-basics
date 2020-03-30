import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Footer from "./Footer";


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
      <div className="body">
        <Header />
        <main className="fl-center">
          <div className="counter-box fl-center">
            <div>
            <h1 className={this.state.likes === 0 ? 'likes' : this.state.likes % 2 === 0 ? 'likes even' : 'likes odd'}>{this.state.likes}</h1>
            </div>            
            <div>
              <button onClick={this.addLike}>Like</button>
              <button onClick={this.disLike}>NotLike</button>
              <button onClick={this.Reset}>Reset</button>
            </div>            
          </div>
        </main>
        <Footer />
      </div>           
    );
  };
};

export default App;
