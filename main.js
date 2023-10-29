let singIn = document.getElementById('signIn');
let singUp = document.getElementById('signUp');
let container = document.getElementById('container')

singUp.addEventListener('click', ()=>{
  container.classList.add('right-panel-active')
})
singIn.addEventListener('click', ()=>{
  container.classList.remove('right-panel-active')
})