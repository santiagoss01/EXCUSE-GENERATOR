/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = [
    "barfed all over me",
    "pissed my pants",
    "crushed my nipple",
    "broked in two"
  ];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomwhen = when[Math.floor(Math.random() * when.length)];
  let randomExcuse = randomwhen.concat(" " + randomWho + " " + randomWhat);

  return randomExcuse;
};
