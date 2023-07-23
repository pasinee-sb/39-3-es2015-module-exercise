// import React from "react";
const choice = ({ items }) => {
  let idx;
  idx = Math.floor(Math.random() * items.length);

  return items[idx];
};

const remove = ({ items, item }) => {
  if (items.includes(item, 0)) {
    return items.filter((i) => i !== item);
  } else {
    return undefined;
  }
};

export { choice, remove };
