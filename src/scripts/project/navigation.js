// Set the active navbar nav-item
var navItems = document.querySelectorAll('.navbar-nav, .nav-item');
[].forEach.call(navItems, function (navItem) {
  navItem.classList.remove('active');
  const path = navItem.getElementsByClassName('nav-link')[0].getAttribute('href');
  if (path === location.pathname) {
    navItem.classList.add('active');
  }
});
