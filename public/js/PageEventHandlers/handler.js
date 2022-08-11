import {
    COIN_IMAGE
} from "../PageElements/elements.js";
import {
    disableFlipCoinBtn,
    flipCoinImageAnimation
} from "../utils/utilFunctions.js";

var numberOfRounds = 1;
var randomNumber;

function handleFlipCoinBtn() {
    flipCoinImageAnimation();
    if (numberOfRounds <= 5) {
        // roundInfo.innerHTML = "Round " + numberOfRounds;
        randomNumber = Math.floor((Math.random() * 2) + 1);
        if (randomNumber === 1) {
            COIN_IMAGE.setAttribute("src", "../images/tails.jpg");
        } else if (randomNumber === 2) {
            COIN_IMAGE.setAttribute("src", "../images/heads.jpg");
        } else {
            alert("Random Number is Out of Range");
        }
    }
    if (numberOfRounds === 5) {
        disableFlipCoinBtn();
    }
    numberOfRounds++;
}

function gameReset() {
    location.reload();
}

export {
    handleFlipCoinBtn,
    gameReset
};