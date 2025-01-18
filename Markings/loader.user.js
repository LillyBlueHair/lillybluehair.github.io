// ==UserScript==
// @name Luke Marking
// @namespace https://www.bondageprojects.com/
// @version 1.6
// @description Bondage Club Markings for Luke's subs
// @author LillyBlueHair
// @downloadURL https://lillybluehair.github.io/Markings/loader.user.js
// @updateURL https://lillybluehair.github.io/Markings/loader.user.js
// @match https://*.bondageprojects.elementfx.com/R*/*
// @match https://*.bondage-europe.com/R*/*
// @match https://*.bondageprojects.com/R*/*
// @grant none
// @run-at document-end
// ==/UserScript==
import(
	`https://lillybluehair.github.io/Markings/marking.js?v=${(
		Date.now()
	).toFixed(0)}`
)
