import {commentList} from "./vars.js";


export function renderCommentList() {
    let list = document.querySelector('.comments');
    
    let commentListHTML = commentList.map((comment, index) => {


        return `<li class="comment">
            <div class="comment-header">
              <div class = "userName">${comment.user}</div>
              <div>${comment.userDate.toLocaleString()}</div>
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
  
    };


