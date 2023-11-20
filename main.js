import {renderCommentList} from "./render.js";
import {getCommentFetch, addCommentFetch} from "./API.js";
import {addCommentBtn, likerFunction,replyCommentFunction} from "./click, like, reply.js";


renderCommentList();
getCommentFetch();
// addCommentFetch();
addCommentBtn();                  
likerFunction();
replyCommentFunction();
  

  console.log("It works!");