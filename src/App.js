import React, { useState } from "react";
import "./styles.css";

const foodDictionary = {
  "🍌": "banana",
  "🥭": "mango",
  "🍍": "pineapple",
  "🍎": "apple",
  "🥪": "sandwich",
  "🍿": "popcorn",
  "🍬": "candy",
  "🥚": "egg",
  "🍕": "pizza",
  "🎂": "cake",
  "🍇": "grapes",
  "🍓": "strawberry",
  "🍔": "burger",
  "🍟": "french Fries",
  "🍣": "sushi",
  "🍨": "ice Cream",
  "🍩": "doughnut",
  "🍪": "cookie",
  "🍭": "lollipop",
  "🍞": "bread",
  "🥜": "peanuts",
  "🥔": "potato",
  "🍅": "tomato",
  "🍒": "cherries",
  "🍉": "watermelon"
};

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [meaning, setMeaning] = useState(
    "Your translation will appear here 👈"
  );

  function changeEventHandler(event) {
    var userInput = event.target.value;
    setUserInput(userInput);

    if (userInput in foodDictionary) {
      setMeaning(foodDictionary[userInput]);
    } else {
      setMeaning("failed to recognize this emoji");
    }
  }

  function foodClickHandler(food) {
    var meaning = foodDictionary[food];
    setMeaning(meaning);
  }

  const foodWeKnow = Object.keys(foodDictionary);

  return (
    <div className="App">
      <h1>food interpreter</h1>
      <input
        placeholder="Enter your emoji here"
        onChange={changeEventHandler}
      />
      <div id="userInput">{userInput}</div>
      <h3>{meaning}</h3>
      <div>
        {foodWeKnow.map((food) => {
          return (
            <span key={food} onClick={() => foodClickHandler(food)}>
              {food}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
