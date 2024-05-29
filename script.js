"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let adviceText = document.querySelector(".advice-text");
  let adviceButton = document.querySelector(".dice-figure");

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const advice = data.slip.advice;
      adviceText.textContent = advice;
    } catch (err) {
      console.log(err.message);
      adviceText.textContent = `Error: ${err.message}`;
    }
  };

  adviceButton.addEventListener("click", getQuote);
});
