const heart = document.querySelector('.heart');
const text = document.querySelector('.text');
heart.style.display = 'none';
text.style.display = 'none';

const btn = document.querySelector('#btn');

btn.addEventListener('click',function(){
    btn.style.display="none";
    setTimeout(() => {
        heart.style.display = 'block';
        text.style.display = 'block';
    }, 1000);
    console.log("click en el boton");
});

