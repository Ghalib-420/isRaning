// Given a class component, add state to it
// state should have a property called `isRaining` which is a boolean
// (true if it is raining, false if not)
// Render the word "Yes" if it is raining
// or "No" if it is not raining

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isRaining: false
    };
  }

  render() {
    const { isRaining } = this.state;
    return (
      <div>
        <h1>Is it Raining today?{isRaining ? "yes" : "no"}</h1>
      </div>
    );
  }
}

export default App;
