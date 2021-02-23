import React from 'react';
import './App.css';

class App extends React.Component {

  /*
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }
  */

  state = {
    counter: 0,
    liked: false
  }

  clickHandler = () => {
    console.log('click');
    // update the state of counter
    // 🚨 should not be done
    // this.state.counter = 5
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    this.setState((state, props) => ({
      counter: state.counter + 1
    }))
  }

  likeHandler = () => {
    this.setState((state, props) => ({
      liked: !state.liked
    }))
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">

          <h1>Counter: {this.state.counter}</h1>
          <button onClick={this.clickHandler}>Click Me</button>
          <h1>{this.state.liked ? 'I like it' : 'I do not like it'}</h1>
          <button onClick={this.likeHandler}>{this.state.liked ? 'Unlike' : 'Like'}</button>


        </header>
      </div>
    );
  }
}

export default App;
