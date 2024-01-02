import {
  renderCommentList,
  changeCommentList,
} from "./renderAddCommentForm.js";
import {
  addForm,
  addFormName,
  addFormText,
  commentLoad,
} from "./renderAddCommentForm.js";

export let user = JSON.parse(window.localStorage.getItem("user")) || 0;

export const setUser = (newUser) => {
  user = newUser;
  window.localStorage.setItem("user", JSON.stringify(user));
};

export function getCommentFetch() {
  return fetch("https://wedev-api.sky.pro/api/v2/unicorni/comments", {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    method: "GET",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Что-то пошло не так, попробуйте еще раз");
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
    })
    .catch((error) => {
      alert(error);
    });
}

export function addCommentFetch({ authName, commentText }) {
  return fetch("https://wedev-api.sky.pro/api/v2/unicorni/comments", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({
      text: commentText,
      name: authName,
    }),
  })
    .then((response) => {
      if (response.status === 201) {
        return getCommentFetch();
      }

      if (response.status === 400) {
        throw new Error(
          "убедитесь в том, что все поля заполнены, ваше имя и текст комментария содережит больше трех символов",
        );
      }
      if (response.status === 500) {
        throw new Error("Что-то пошло не так, попробуйте еще раз");
      }
    })
    .finally(() => {
      const addFormBtn = document.querySelector(".add-form-button");

      addFormBtn.disabled = false;
      commentLoad.classList.add("hidden");
    })
    .catch((error) => {
      alert(error);
    });
}

export function autharization() {
  const authNameFormElement = document.querySelector(".auth-form-name");
  const authFormPassElement = document.querySelector(".auth-form-pass");
  return fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login: authNameFormElement.value,
      password: authFormPassElement.value,
    }),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else if (response.status === 400) {
        throw new Error("Неверный логин или пароль");
      } else {
        throw new Error("Что-то пошло не так, попробуйте еще раз");
      }
    })

    .catch((error) => {
      alert(error);
    });
}
