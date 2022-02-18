const feild = document.querySelector('textarea');
const backUp = feild.getAttribute('placeholder');
const btn = document.querySelector('.btn');
const clear = document.getElementById('clear')
const container = document.getElementById('container');
const likeBtn = document.querySelector('.like__btn');
const likeIcon = document.querySelector('#icon');
const count = document.querySelector('#count');


let clicked = false;
likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});


container.addEventListener('submit' , (e) => {
    e.preventDefault();
    const comment = document.getElementById('comment');
    comment.innerText = feild.value;
})

clear.addEventListener('click' , (e) => {
    e.preventDefault();
    btn.style.display = 'none';
    feild.value = '';

})

feild.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    btn.style.display = 'block'
}

feild.onblur = function(){
    this.setAttribute('placeholder',backUp);
    this.style.borderColor = '#aaa'
}

clear.onclick = function(){
    
}