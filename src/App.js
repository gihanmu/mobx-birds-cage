import React, { Component } from 'react';
import {Inject, observer, inject} from 'mobx-react';

@inject('BirdStore')
@observer
class App extends Component {

  handleBirdSubmission = (e) => {
    e.preventDefault();
    const bird = this.bird.value;
    this.props.BirdStore.addBird(bird);
    this.bird.value = '';
  }

  render() {
    //const BirdStore = this.props.BirdStore ....ES6 way is below
    const {BirdStore} = this.props;
    return (
      
      <div className="App">
        <h2>You have {BirdStore.birdCount} birds.</h2>
        <input type="text" placeholder="Enter Bird" ref={input => this.bird = input}/>
        <button onClick={e => this.handleBirdSubmission(e)}>Add Bird</button>

        <h3>View my BirdStore</h3>
        <ul>
        {BirdStore.birds.map((bird, index) => (
            <li key={index}>{bird}</li>
        ))}
        </ul>
      </div>
    );
  }
}

export default App;
