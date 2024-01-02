import { setUser, autharization, user } from "./API.js";
import { renderAddCommentForm } from "./renderAddCommentForm.js";
import { getCommentFetch } from "./API.js";


export function renderAutharizationForm() {
  const authContainerElement = document.querySelector('.auth-container');

  const loginHtml = `<div class="auth-form">
    <input type="text" 
    maxlength="50" 
    class="auth-form-name" 
    placeholder="Введите логин" />
    <input type="password" 
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
          
          return setUser(responseData.user);
        
        }).then(() => {
          // token ? onLoad() : authFormElement.style.display = 'block';
          
          if (user.token) {
            authFormElement.style.display = 'none'; 
            getCommentFetch();
            renderAddCommentForm(user);
            const comments = document.querySelector('.comments');
            comments.classList.remove('hidden');
          } else {
            authFormElement.style.display = 'block';
          }  
        })
        
    });
  }
  login();
  
};
