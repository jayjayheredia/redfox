function scrollToSection(event, id) {
  event.preventDefault(); // evita cambiar la URL
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}