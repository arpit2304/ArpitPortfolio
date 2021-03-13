// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// function type(n, t) {
//   var str = document.getElementsByTagName("anmtn")[n].innerHTML.toString();
//   var i = 0;
//   document.getElementsByTagName("anmtn")[n].innerHTML = "";

//   setTimeout(function() {
//       var se = setInterval(function() {
//           i++;
//           document.getElementsByTagName("anmtn")[n].innerHTML =
//               str.slice(0, i) + "|";
//           if (i == str.length) {
//               clearInterval(se);
//               document.getElementsByTagName("anmtn")[n].innerHTML = str;
//           }
//       }, 20);
//   }, t);
// }

// type(0, 1500);

AOS.init({
  easing: 'ease',
  duration: 1800
});
