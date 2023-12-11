import { renderCommentList } from "./render.js";
import { onAuthTextClick } from "./eventListeners.js";
import { getCommentFetch, token } from "./API.js";
import { renderAddCommentForm } from "./renderAddCommentForm.js";


export function onLoad() {
    
    window.addEventListener('load', () => {
        console.log(token);

        getCommentFetch();
        token ?  (renderCommentList(), renderAddCommentForm() ):  onAuthTextClick();
        console.log(token);
           
        // onAuthTextClick();
        // renderAddCommentForm();
        // renderCommentList();
        // alert('Страница загружена!');
      });
}
