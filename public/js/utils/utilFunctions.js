import {
    FLIP_COIN,
    COIN_IMAGE
} from "../PageElements/elements.js";

function flipCoinImageAnimation() {
    COIN_IMAGE.classList.add("js-flip");
    setTimeout(() => {
        COIN_IMAGE.classList.remove("js-flip");
    }, 1000);
}

function disableFlipCoinBtn() {
    FLIP_COIN.disabled = true;
}


export {
    disableFlipCoinBtn,
    flipCoinImageAnimation
};