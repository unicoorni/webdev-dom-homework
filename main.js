// import { renderCommentList } from "./render.js";c
import { getCommentFetch } from "./API.js";
// import { addCommentBtn } from "./eventListeners.js";
import { renderAutharizationForm } from "./renderAutharizationForm.js";
import { onAuthTextClick } from "./eventListeners.js";


// onLoad();

// renderCommentList();
// renderAutharizationForm();

getCommentFetch();
onAuthTextClick();
// addCommentBtn();
renderAutharizationForm();
// console.log("It works!");