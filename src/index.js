import React from "react";
import { render } from "react-dom";

function name1() {
  console.log("nanan");
}

const name3 = (val) => {
  console.log(val);
};

const name4 = (val, val2) => {
  console.log(val + val2);
};

const name6 = () => {
  return "r6 value";
};

const name7 = () => "zzz";

console.log(name6());
console.log(name7());

const name8 = () => console.log("ryaku");

name8();
