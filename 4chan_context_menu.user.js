// ==UserScript==
// @name         Remove 4chan context menu items
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove 4chan context menu items
// @author       Grixm
// @match        https://boards.4channel.org/*/catalog
// @match        https://boards.4chan.org/*/catalog
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = removeMenuItems;
}
)();

function removeMenuItems(){
    var contextMenuNode = document.getElementById("ctxmenu-thread");
    contextMenuNode.innerHTML='';
}