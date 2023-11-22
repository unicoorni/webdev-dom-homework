import { renderCommentList } from "./render.js";
import { getCommentFetch } from "./API.js";
import { addCommentBtn } from "./click, like, reply.js";


renderCommentList();
getCommentFetch();
addCommentBtn();


console.log("It works!");