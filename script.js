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
    const discord_wedgit = document.getElementById("discord_wedgit");

    // Check the current rotation and toggle
    if (discord_wedgit.style.marginLeft === "-80%") {
        discord_wedgit.style.marginLeft = "1%"; // Adjust according to the actual width
    } else {
        discord_wedgit.style.marginLeft = "-80%"; // Move widget to the right
    }
}
