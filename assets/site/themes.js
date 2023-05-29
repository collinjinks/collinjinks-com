---
layout: none
---
document.addEventListener("DOMContentLoaded", () => {

document.body.addEventListener("keypress", (e) => {
    if (!(e.ctrlKey && e.shiftKey))
        return;
    document.body.classList.remove("theme-1", "theme-2");
    if (e.key == "!") {
    }
    else if (e.key == "@") {
        document.body.classList.add("theme-1");
    }
    else if (e.key == "#") {
        document.body.classList.add("theme-2");
    }
});

}); {%comment%}DOMContentLoaded{%endcomment%}
