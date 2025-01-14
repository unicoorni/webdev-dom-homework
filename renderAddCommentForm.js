
import { addCommentFetch, user } from "./API.js";
import { likerFunction, replyCommentFunction } from "./eventListeners.js";
// import { formatDateToRu, formatDateToUs } from "./lib/formatDate/formatDate.js"
import { format } from "date-fns";

const addForm = document.querySelector('.add-form');

const addFormName = document.querySelector('.add-form-name');
const addFormText = document.querySelector('.add-form-text');

const commentLoad = document.querySelector('.load-comment');
const addcontainerElement = document.querySelector('.add-container');
const addFormBtn = document.querySelector('.add-form-button');

export { addForm, addFormName, addFormText, commentLoad, addFormBtn };


export function renderAddCommentForm(user) {


  const addFormHtml = `
    <div class="add-form">
      <input type="text" maxlength="50" class="add-form-name" placeholder="Введите ваше имя" value="${user.name}" readonly/>
      <textarea type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" rows="4"></textarea>
      <div class="add-form-row">
        <button class="add-form-button">Написать</button>
      </div>
    </div>`;

  addcontainerElement.innerHTML = addFormHtml;


const addFormBtn = document.querySelector('.add-form-button');

  function clickAddButton() {
    const addFormName = document.querySelector('.add-form-name');
    const addFormText = document.querySelector('.add-form-text');
    const commentLoad = document.querySelector('.load-comment');


    addFormName.classList.remove('form-error');
    addFormText.classList.remove('form-error');

    if (addFormName.value === '') {
      addFormName.classList.add('form-error');
      return;
    }

    else if (addFormText.value === '') {
      addFormText.classList.add('form-error');
      return;
    }
    addFormBtn.disabled = true;

    addCommentFetch({authName: addFormName.value, commentText: addFormText.value })
    .then( () => {
      const addFormName = document.querySelector('.add-form-name');
      const addFormText = document.querySelector('.add-form-text');
  
      addFormName.value = "";
      addFormText.value = "";
    });

    const addForm = document.querySelector('.add-form');

    commentLoad.classList.remove('hidden');
  };

  function addCommentBtn() {

    addFormBtn.addEventListener('click', clickAddButton);
  };

  addCommentBtn();

}

export let commentList = [];

export function changeCommentList(changingElement) {
  commentList = changingElement;
};


export function renderCommentList() {
  let list = document.querySelector('.comments');

  let commentListHTML = commentList.map((comment, index) => {
    const createDate = format(comment.userDate, 'dd/MM/yyyy hh:mm');

    return `<li class="comment">
            <div class="comment-header">
              <div class = "userName">${comment.user}</div>
             
              <div>${createDate}</div>
           
            </div>
  
            <div class="comment-body">
              <div class="comment-text" data-index="${index}">
                ${comment.userComment}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${comment.likesCounter ? comment.likesCounter : comment.likesCounter = 0}</span>
                <button class="like-button ${comment.isActiveLike ? '-active-like' : ''}"
                 data-index="${index}"></button>
              </div>
            </div>
          </li>`;
  }).join('');

  list.innerHTML = commentListHTML;
  likerFunction();
  replyCommentFunction();
};

