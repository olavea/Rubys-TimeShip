import React from "react";
import AddFishForm from "module";

class App extends React.Component {
  // P. Bruk en property til initial state
  // P. Use a property for initial state
  state = {
    fishes: {},
    order: {},
  };
  // A. En arrow function inni en property for å legge til fish
  // A. An arrow function inside a property to add fish
  addFish = (fish) => {
    // 1. Ta en copy av eksisterende state (C)
    // 1. Take a copy of existing state (C)
    const fishes = { ...this.state.fishes };

    // 2. Legg til vår nye fish til fishes variablen (A)
    // 2. Add our new fish to the fishes variable (A)
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state (sS)
    this.setState({ fishes });
  };
}

export default App;
