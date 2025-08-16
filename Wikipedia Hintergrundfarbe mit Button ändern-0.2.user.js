// ==UserScript==
// @name         Wikipedia Hintergrundfarbe mit Button ändern
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Fügt einen Button hinzu, um die Hintergrundfarbe zu wechseln
// @match        https://de.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    const btn = document.createElement('button');
    btn.textContent = "Farbe wechseln";
    btn.style.position = "fixed";
    btn.style.top = "10px";
    btn.style.right = "10px";
    btn.style.zIndex = "9999";
    btn.onclick = function() {
        document.body.style.background =
            document.body.style.background === "lightblue" ? "#FFD700" : "lightblue";
    };
    document.body.appendChild(btn);
})();