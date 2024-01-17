const btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', function () {
  document.getElementById('nav-items').classList.toggle('-translate-x-full');
  this.classList.toggle('bg-bx-menu');
  this.classList.toggle('bg-bx-x');
});
