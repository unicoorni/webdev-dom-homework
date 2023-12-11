import { setToken, autharization } from "./API.js";

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
  const authFormElement = document.querySelector('.auth-form');

   function login() {
    
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
  
          return setToken(responseData.user.token);
        
        }).then(() => {

          authFormElement.style.display = 'none';
        })
        
    });
  }
  login();
  
};
