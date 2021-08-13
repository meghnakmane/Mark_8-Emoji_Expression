import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "🥰": "smiling with heart",
  "😳": "disbelief",
  "😠": "angry",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😷": "medical mask"
};

var emojiWeHave = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setUserInput] = useState("");

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry We don't have this in our database.";
    }
    setUserInput(meaning);
  }
  // console.log (meaning);

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setUserInput(meaning);
    console.log(emoji);
  }

  return (
    <div className="App">
      <h1>Emoji Expressions !</h1>

      <input className="input" onChange={inputHandler} />

      <div className="meaning"> {meaning}</div>

      <div className="emoji-line">
        {" "}
        Please Select below emoji to find out its meaning{" "}
      </div>

      {emojiWeHave.map(function (emoji) {
        return (
          <span
            className="emoji"
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
