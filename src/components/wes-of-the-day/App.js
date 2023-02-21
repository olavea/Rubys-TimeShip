import React from "react";
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = (fish) => {
    console.log("adding a fish");
  };
  render() {
    return (
      <div className="wes-of-the-day">
        <div className="menu">
          <h2 tagline="Fresh React Shop" />
        </div>
      </div>
    );
  }
}
