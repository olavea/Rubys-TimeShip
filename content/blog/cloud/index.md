
```js

```
```js
import React from "react";

class AddFishForm extends React.Component {
    createFish = event => {
        // 1. stop
        event.preventDefault();
        // 2
        const fish = {
            name: this.nameRef.value.value,
        };
        // 3. pass it our fish call this addFish which lives in our main app.js component
        this.props.addFish(fish)
    }
  render() {
    return (
        <div className="inventory">Inventory!!!</div>;

        )
  }
}

export default AddFishForm;
```
```js
import React from "react";

class Inventory extends React.Component {
  render() {
    return (
        <div className="inventory">Inventory!!!</div>;
        <AddFishForm addFish={this.props.addFish} />
        )
  }
}

export default Inventory;
```


```js
import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

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
          <Header tagline="Fresh React Shop" />
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}
```

```js
import React from "react";


class App extends React.Component {

  // P. Bruk en property til initial state
  // P. Use a property for initial state

  // A. En arrow function inni en property for å legge til fish
  // A. An arrow function inside a property to add fish

    // 1. Ta en copy av eksisterende state (C)
    // 1. Take a copy of existing state (C)


    // 2. Legg til vår nye fish til fishes variablen (A)
    // 2. Add our new fish to the fishes variable (A)


    // 3. Set the new fishes object to state (sS)

  };
};

export default App;

```


```bash
nvm use 18

npx gatsby new gatsby-starter-blog https://github.com/gatsbyjs/gatsby-starter-blog

  cd gatsby-starter-blog
  gatsby develop


```

