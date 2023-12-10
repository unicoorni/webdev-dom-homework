import { renderCommentList } from "./render.js";
import { onAuthTextClick } from "./eventListeners.js";
import { getCommentFetch } from "./API.js";
import { renderAddCommentForm } from "./renderAddCommentForm.js";


export function onLoad() {
    
    window.addEventListener('load', () => {

        return getCommentFetch()
        .then(() => {
            return  onAuthTextClick();})
            .then(() => {
                return renderCommentList();
            });
            // добавить функционал в функцию по клику по тексту 
        // onAuthTextClick();
        // renderAddCommentForm();
        // renderCommentList();
    
        
        // alert('Страница загружена!');
      });
}
