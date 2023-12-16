// import { addFormBtn, commentLoad, addForm, addFormName, addFormText } from "./vars.js";
import { renderCommentList, commentList } from "./renderAddCommentForm.js";
// import { addCommentFetch } from "./API.js";
import { renderAutharizationForm } from "./renderAutharizationForm.js";


// export function clickAddButton() {

//   addFormName.classList.remove('form-error');
//   addFormText.classList.remove('form-error');

//   if (addFormName.value === '') {
//     addFormName.classList.add('form-error');
//     return;
//   }

//   else if (addFormText.value === '') {
//     addFormText.classList.add('form-error');
//     return;
//   }
//   addFormBtn.disabled = true;

//   addCommentFetch();

//   addForm.classList.add('hidden');
//   commentLoad.classList.remove('hidden');
// };

// export function addCommentBtn() {

//   addFormBtn.addEventListener('click', clickAddButton);
// };

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

    authTextElement.classList.add('hidden');
    renderAutharizationForm();

    
  })
}
