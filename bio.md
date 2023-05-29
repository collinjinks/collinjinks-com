---
title: Bio
custom-css: bio
---

{%- include bio.md %}

### Concert bio (<span id="concert-bio-count"></span> words)

<div class="bio-links">
    <button onclick="go('{{ site.baseurl }}{% link assets/Concert-bio.pdf %}')">View PDF</button>
    <button onclick="copyBio('concert-bio')">Copy to Clipboard</button> <span class="done" id="concert-bio-done">Copied!</span>
</div>

<div id="concert-bio" class="bio" markdown="1">
{% include concert-bio.md %}
</div>

### Short bio (<span id="short-bio-count"></span> words)

<div class="bio-links">
    <button onclick="go('{{ site.baseurl }}{% link assets/Short-bio.pdf %}')">View PDF</button>
    <button onclick="copyBio('short-bio')">Copy to Clipboard</button> <span class="done" id="short-bio-done">Copied!</span>
</div>

<div id="short-bio" class="bio" markdown="1">
{% include short-bio.md %}
</div>

## Curriculum Vitae

<button onclick="go('{{ site.baseurl }}{% link assets/CV.pdf %}')">View PDF</button>


<script>
function go(url) {
    location.href = url;
}
function copyBio(id) {
    let bio = document.getElementById(id).innerText.replace(/\n\n\n/g, "\n\n");
    let blob = new Blob([bio], { type: "text/plain" });
    let item = new ClipboardItem({"text/plain": blob});
    navigator.clipboard.write([item]).then(() => {}, () => {console.error(e);});

    document.getElementById(id + "-done").classList.add("show");

}
window.addEventListener('DOMContentLoaded', () => {
    function countWords(id) {
        var text = document.getElementById(id).innerText;
        var count = text.trim().split(/\s+/).filter(st => st != '').length;
        document.getElementById(id + "-count").innerText = count;
    }
    countWords("concert-bio");
    countWords("short-bio");

    document.querySelectorAll(".done").forEach(function (label) {
        label.addEventListener("animationend", (e) => {
            e.target.classList.remove("show");
        })
    })

    var lightbox = new Lightbox();
    lightbox.load();
});
</script>