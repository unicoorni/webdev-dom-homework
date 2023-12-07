// import { addFormBtn, commentLoad, addForm, addFormName, addFormText, loadEl } from "./vars.js";

import { setToken } from "./API";

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
  const authNameFormElement = document.querySelector('.auth-form-name');
  const authFormPassElement = document.querySelector('.auth-form-pass');
  return fetch("https://wedev-api.sky.pro/api/user/login", {

    method: "POST",
    body: JSON.stringify({
      login: authNameFormElement.value,
      password: authFormPassElement.value,
    }),
  })
    .then((response) => {

      if (response.status === 201) {

        // console.log(response.json());
        return response.json();

      } else if (response.status === 400) {

        throw new Error('Неверный логин или пароль');

      } else {

        throw new Error('Что-то пошло не так, попробуйте еще раз');
      }
    })
    
    .catch((error) => {
      alert(error);
    });

}

export function login() {
  const authFormBtnElement = document.querySelector('.auth-form-button');
  const authNameFormElement = document.querySelector('.auth-form-name');
  const authFormPassElement = document.querySelector('.auth-form-pass');
  
  
  authFormBtnElement.addEventListener('click', () => {
    autharization(
      {
      login: authNameFormElement.value,
      password: authFormPassElement.value,
    }
    )
      .then((responseData) => {

        setToken(responseData.user.token);
  
      });
  });
}



