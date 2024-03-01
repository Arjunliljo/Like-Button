
const button = document.getElementById('likeButton');
const icon = document.querySelector('.like-box span');
const likes = document.querySelector('.likes');


button.addEventListener('click', like);

let count = 0;

function like() {
    likes.innerHTML = `${++count} likes`
    icon.style.color = `rgb(15, 71, 192)`;
    icon.style.animation = 'rotateAnimation 1s ease';
}