const body = document.body;
const btn = document.querySelector("button");
const media = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    body.classList.remove("dark", "light");
    body.classList.add(theme);
}

// Initial load
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(media.matches ? "dark" : "light");
}

// System change (only if no manual theme)
media.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(media.matches ? "dark" : "light");
    }
});

// Toggle button
btn.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});