import React, { useReducer } from "react";

const initialImage = {
  currentImgIndex: 0,
};

function imageReducer(state, action) {
  switch (action.type) {
    case "PREVIOUS_IMAGE":
      return {
        currentImgIndex: state.currentImgIndex - 1,
      };
    case "NEXT_IMAGE":
      return {
        currentImgIndex: state.currentImgIndex + 1,
      };
    default:
      return state;
  }
}

const images = [
"https://cdn.marvel.com/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg",
"https://assets-prd.ignimgs.com/2023/05/24/highest-grossing-marvel-movies-slideshow-thumb-1684970310414.jpg",
"https://media.wired.com/photos/5955ceabcbd9b77a41915cf6/191:100/w_1280,c_limit/marvel-characters.jpg",
"https://play-lh.googleusercontent.com/7cwzGABaYlrcEozvmyLtJs6--irIQDkKPjhk3CVrxb-0xxl1eFsaAE2SQH1F7I-yNwQ=w526-h296-rw"
]

function TwentyEight() {
  const [state, dispatch] = useReducer(imageReducer, initialImage);
  const ImgIndex = images[state.currentImgIndex]
  return (
    <div>
      <img src={ImgIndex} alt="" />
      <button onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}>
        Previous
      </button>
      <button onClick={() => dispatch({ type: "NEXT_IMAGE" })}>Next</button>
    </div>
  );
}

export default TwentyEight;
