"use strict";

document.addEventListener("DOMContentLoaded", () => {
  let adviceText = document.querySelector(".advice-text") as HTMLElement;
  let adviceButton = document.querySelector(".dice-figure") as HTMLElement;

  const getQuote = async (): Promise<void> => {
    try {
      const response: Response = await fetch(
        "https://api.adviceslip.com/advice"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const advice = data.slip.advice;
      adviceText.textContent = advice;
   
    } catch (err) {
      let errorMessage = "An Error occured";

      if (err instanceof Error) {
        errorMessage = err.message;
      }
      console.log(errorMessage);
      adviceText.textContent = `Error: ${errorMessage}`;
    }
  };

  adviceButton.addEventListener("click", getQuote);
});
