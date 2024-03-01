import { renderCommentList, commentList } from "./renderAddCommentForm.js";

import { renderAutharizationForm } from "./renderAutharizationForm.js";


export function likerFunction() {

  const likesButtonElements = document.querySelectorAll('.like-button');


  for (const likeButtonElement of likesButtonElements) {

    likeButtonElement.addEventListener('click', (event) => {
      event.stopPropagation();
      const index = likeButtonElement.dataset.index;

      if (commentList[index].isActiveLike === false) {
        commentList[index].isActiveLike = true;
        commentList[index].likesCounter++;
      } else {
        commentList[index].isActiveLike = false;
        commentList[index].likesCounter--;
      }
      renderCommentList();

    });

  }

};

export function replyCommentFunction() {

  const addFormText = document.querySelector('.add-form-text');
  const commentsReplyEl = document.querySelectorAll('.comment-text');

  for (const commentReplyEl of commentsReplyEl) {

    commentReplyEl.addEventListener('click', (event) => {
      event.stopPropagation();
      const index = commentReplyEl.dataset.index;

      addFormText.value = `>${commentList[index].user} ${commentReplyEl.textContent}`;

      renderCommentList();
    });
  }
};

export function onAuthTextClick() {
  const authTextElement = document.querySelector('.auth-text');

  authTextElement.addEventListener('click', () => {

    const comments = document.querySelector('.comments');
    comments.classList.add('hidden');

    authTextElement.classList.add('hidden');
    renderAutharizationForm();

    
  })
}
