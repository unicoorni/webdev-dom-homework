import { renderCommentList, changeCommentList } from "./render.js";
import { addFormBtn, commentLoad, addForm, addFormName, addFormText, loadEl, authFormPassElement, authNameFormElement } from "./vars.js";




export function getCommentFetch() {
  return fetch("https://wedev-api.sky.pro/api/v1/unicorni/comments", {
    method: "GET",

  })

    .then((response) => {

      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Что-то пошло не так, попробуйте еще раз');
      }

    })
    .then((responseData) => {

      let appComments = responseData.comments.map((comment) => {
        return {
          user: comment.author.name,
          userDate: new Date(comment.date),
          userComment: comment.text,
          isActiveLike: false,
          likesCounter: comment.likes,
        };
      });
      changeCommentList(appComments);

      renderCommentList();
      loadEl.classList.add('hidden');
    })
    .catch((error) => {
      alert(error);
    });

}


export function addCommentFetch() {

  fetch("https://wedev-api.sky.pro/api/v1/unicorni/comments", {

    method: "POST",
    body: JSON.stringify({
      text: addFormText.value,
      name: addFormName.value,
    }),
  })
    .then((response) => {

      if (response.status === 201) {
        
        return getCommentFetch();
      } else if (response.status === 400) {
        throw new Error('убедитесь в том, что все поля заполнены, ваше имя и текст комментария содережит больше трех символов');

      } else {
        throw new Error('Что-то пошло не так, попробуйте еще раз');
      }

    })
    .finally(() => {
      addForm.classList.remove('hidden');
      addFormBtn.disabled = false;
      commentLoad.classList.add('hidden');

      addFormName.value = "";
      addFormText.value = "";

    })
    .catch((error) => {
      alert(error);
    });
}

// export function autharization() {

//   return fetch("https://wedev-api.sky.pro/api/user/login", {

//     method: "POST",
//     body: JSON.stringify({
//       login: authNameFormElement.value,
//       password: authFormPassElement.value,
//     }),
//   })
//   .then((response) => {

//     if (response.status === 201) {
//       return response.json;
//     } else if (response.status === 400) {
//       throw new Error('убедитесь в том, что все поля заполнены, ваше имя и текст комментария содережит больше трех символов');

//     } else {
//       throw new Error('Что-то пошло не так, попробуйте еще раз');
//     }

//   })

// }