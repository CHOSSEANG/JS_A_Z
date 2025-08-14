const toggleThemeBtn = document.getElementById('toggleTheme');

toggleThemeBtn.addEventListener('click',() =>  {
    document.documentElement.classList.toggle('darkTheme');
    console.log('clicked');
})

const changeColorBtn = document.getElementById('changeToColor');

changeColorBtn.addEventListener('click',()=>{
    const introduce = document.getElementById('introduce-myself');
    const bootcamp = document.getElementById('deep-dive-bootcamp');
    const introduceText = document.getElementById('myself-header');
    const bootcampText = document.getElementById('deep-dive-header');
    introduce.style.backgroundColor ='yellow';
    bootcamp.style.backgroundColor='orange';
    introduceText.innerHTML = '노란색';
    bootcampText.innerHTML = '오렌지색';
})