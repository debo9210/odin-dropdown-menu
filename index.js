const menuContainer = document.querySelector('.menuContainer');
const menu = document.querySelectorAll('.menu');

menuContainer.addEventListener('click', (e) => {
  const menuFunc = e.target.nextElementSibling.classList;
  if (menuFunc.contains('menuHide')) {
    menuFunc.remove('menuHide');
    menuFunc.add('menuShow');
  } else if (menuFunc.contains('menuShow')) {
    menuFunc.remove('menuShow');
    menuFunc.add('menuHide');
  }
});
