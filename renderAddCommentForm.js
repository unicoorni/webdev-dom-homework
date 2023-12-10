import { addCommentBtn } from "./eventListeners.js";

export function renderAddCommentForm() {
    const containerElement = document.querySelector('.container');
  
    const addFormHtml = `
    <div class="add-form">
      <input type="text" maxlength="50" class="add-form-name" placeholder="Введите ваше имя" />
      <textarea type="textarea" class="add-form-text" placeholder="Введите ваш коментарий" rows="4"></textarea>
      <div class="add-form-row">
        <button class="add-form-button">Написать</button>
      </div>
    </div>`;
  
    containerElement.innerHTML = addFormHtml;

    addCommentBtn();

}