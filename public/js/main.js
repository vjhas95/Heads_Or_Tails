/*
    App name :- Heads Or Tails Game 
    Author :- Vijay Hasani
*/
// 1 for Tails and 2 for Heads..
import {
    COIN_IMAGE,
    FLIP_COIN,
    RESET
} from "./PageElements/elements.js";
import {
    handleFlipCoinBtn,
    gameReset
} from "./PageEventHandlers/handler.js";

var consoleGameHead = `*************************
** HEADS OR TAILS GAME ** 
*************************`;

console.log(consoleGameHead);


FLIP_COIN.addEventListener("click", handleFlipCoinBtn);

RESET.addEventListener("click", gameReset);