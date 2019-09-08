import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Header from "./components/Header";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  //Randomize Array
      /*maybe I need to add a "position" variable to the Friend object so that I can change that value with math.random
      
      */

  //Scoring
      /*Create array for CLicked images 
      /store value of images ID
      if that value is the same as previous value
      (Loss) user has clicked same image twice
      (Win) The ID's are never the same twice 
            increent score
      */

 //High Score Updater
      /*If score > highscore
      set score to highscore
      Manipulate the state
      */

  /*Left this bit in to use as a refernce in altering the state
  Removing because its non essential to the game

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };*/

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>React Clicky Memory Game</Title>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
