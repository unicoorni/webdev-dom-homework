import { renderCommentList } from "./render.js";
import { getCommentFetch } from "./API.js";
import { addCommentBtn } from "./eventListeners.js";
import { renderAutharizationForm, login } from "./renderAutharizationForm.js";


renderCommentList();

getCommentFetch();
addCommentBtn();
// renderAutharizationForm();
// login();
console.log("It works!");