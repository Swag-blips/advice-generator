"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    let adviceText = document.querySelector(".advice-text");
    let adviceButton = document.querySelector(".dice-figure");
    const getQuote = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://api.adviceslip.com/advice");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = yield response.json();
            const advice = data.slip.advice;
            adviceText.textContent = advice;
        }
        catch (err) {
            let errorMessage = "An Error occured";
            if (err instanceof Error) {
                errorMessage = err.message;
            }
            console.log(errorMessage);
            adviceText.textContent = `Error: ${errorMessage}`;
        }
    });
    adviceButton.addEventListener("click", getQuote);
});
