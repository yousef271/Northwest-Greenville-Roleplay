document.addEventListener("DOMContentLoaded", () => {
    const headerText = document.getElementById('header-text');
    const footerText = document.getElementById('footer-text');
    const sections = document.querySelectorAll('section');

    headerText.classList.add('fade-in');
    footerText.classList.add('fade-in-delayed');

    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.classList.add('fade-in-delayed');
        } else {
            section.classList.add('fade-in-more-delayed');
        }
    });
});

function widget() {
    const arrow = document.getElementById("arrow");
    const discord_wedgit = document.getElementById("discord_wedgit");

    // Check the current rotation and toggle
    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "rotate(0deg)"; // Reset to original rotation
        discord_wedgit.style.marginLeft = "90%"; // Move widget back
    } else {
        arrow.style.transform = "rotate(180deg)"; // Rotate arrow
        discord_wedgit.style.marginLeft = "100%"; // Move widget to the right
    }
}
