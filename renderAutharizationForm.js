import { setToken, autharization, token } from "./API.js";
// import { renderCommentList } from "./render.js";
import { renderAddCommentForm } from "./renderAddCommentForm.js";
import { getCommentFetch } from "./API.js";


// import { onLoad } from "./onLoad.js";



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
          
          return setToken(responseData.user.token);
        
        }).then(() => {
          // token ? onLoad() : authFormElement.style.display = 'block';
          token ? (authFormElement.style.display = 'none', getCommentFetch(), renderAddCommentForm() ) : authFormElement.style.display = 'block';
          
          // authFormElement.style.display = 'none';
          // token ?  (renderCommentList(), renderAddCommentForm() ):  onAuthTextClick();
          
        })
        
    });
  }
  login();
  
};
