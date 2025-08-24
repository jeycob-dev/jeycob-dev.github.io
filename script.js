//Para mostrar u ocultar el menú principal y agregar el icono de cierre (X)
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('active');  // Muestra el menú
  menuToggle.style.display = 'none'; // Oculta el botón MENÚ
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('active'); // Oculta el menú
  menuToggle.style.display = 'block';  // Muestra el botón MENÚ
});


/*Script para aplicar un degradado al texto y al ícono del mednú seeccionado*/
const currentLocation = location.href;
const menuItems = document.querySelectorAll(".side-menu a");

menuItems.forEach((item) => {
  if (item.href === currentLocation) {
    item.classList.add("active");
  }
});
