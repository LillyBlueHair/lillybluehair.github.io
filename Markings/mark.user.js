// ==UserScript==
// @name Luke Marking
// @namespace https://www.bondageprojects.com/
// @version 1.6
// @description Bondage Club Markings for Luke's subs
// @author LillyBlueHair
// @include /^https?:\/\/(www\.)?(bondageprojects\.elementfx|bondage-europe)\.com\/R\d+\/(BondageClub|\d+)(\/((index|\d+)\.html)?)?$/
// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
    "use strict";
    const src = `https://lillybluehair.github.io/Markings/marking.js?v=${Date.now()}`;
    if (typeof markins_loaded === "undefined") {
        const script = document.createElement("script");
        script.src = src;
        script.type = "text/javascript";
        script.crossOrigin = "anonymous";
        script.id = "Markings";
        document.head.appendChild(script);
    }
})();
