// ==UserScript==
// @name         Remove 4chan context menu items
// @namespace    https://github.com/Grix
// @updateURL    https://github.com/Grix/4chan-remove-contextmenu-items/raw/master/4chan_context_menu.user.js
// @version      0.3
// @description  Remove 4chan context menu items
// @author       Grixm
// @match        https://boards.4channel.org/*/catalog
// @match        https://boards.4chan.org/*/catalog
// @match        https://boards.4channel.org/*
// @match        https://boards.4chan.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = setTimeout(removeMenuItems, 3000);
}
)();

function removeMenuItems(){
    var contextMenuNode = document.getElementById("ctxmenu-thread");
    contextMenuNode.innerHTML='';
	var ad = document.getElementsByClassName("adg-rects desktop");
	ad.innerHTML='';//parentNode.removeChild(ad);
}