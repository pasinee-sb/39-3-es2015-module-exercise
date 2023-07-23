import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { choice, remove } from "./helpers";
import foods from "./foods";
// import App from "./App";

const Index = () => {
  const randomFood = choice({ items: foods });
  console.log(`I’d like one ${randomFood}, please.`);
  console.log(`Here you go: ${randomFood}`);
  console.log(`Delicious! May I have another?`);

  const removedItem = remove({ items: foods, item: randomFood });
  console.log(`I’m sorry, we’re all out. We have ${removedItem} left.`);
  return (
    <div>
      {randomFood} +++ {removedItem}
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
