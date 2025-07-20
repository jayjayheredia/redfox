function scrollToSection(event, id) {
    event.preventDefault(); // No cambia la URL
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
