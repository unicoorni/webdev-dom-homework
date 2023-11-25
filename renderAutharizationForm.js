// import { autharization } from "./API.js";
import { addFormBtn, commentLoad, addForm, addFormName, addFormText, loadEl, authFormPassElement, authNameFormElement } from "./vars.js";


export function renderAutharizationForm() {
    const authContainerElement = document.querySelector('.auth-container');
    


    const loginHtml = `<div class="auth-form">
    <input type="text" 
    maxlength="50" 
    class="auth-form-name" 
    placeholder="Введите логин" />
    <input type="text" 
    maxlength="50" 
    class="auth-form-pass" 
    placeholder="Введите пароль"/>
    <div class="auth-form-row">
      <button class="auth-form-button">Войти</button>
    </div>
  </div>`;

    authContainerElement.innerHTML = loginHtml;
};

export function autharization() {

  return fetch("https://wedev-api.sky.pro/api/user/login", {

    method: "POST",
    body: JSON.stringify({
      login: authNameFormElement.value,
      password: authFormPassElement.value,
    }),
  })
  .then((response) => {

    if (response.status === 201) {
      return response.json;
    } else if (response.status === 400) {
      throw new Error('убедитесь в том, что все поля заполнены, ваше имя и текст комментария содережит больше трех символов');

    } else {
      throw new Error('Что-то пошло не так, попробуйте еще раз');
    }

  })

}

export function login() {
const authFormBtnElement = document.querySelector('.auth-form-button');

    authFormBtnElement.addEventListener('click', () => {
      autharization({login: authNameFormElement.value,
        password: authFormPassElement.value})
      .then(responseData);
      console.log(responseData);
    });
  }
  
