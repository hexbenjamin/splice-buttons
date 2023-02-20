// ==UserScript==
// @name           button_testing
// @namespace      hb
// @match          *://*splice.com/sounds/packs/*
// @match          file:///*
// @grant          none
// @version        0.1
// @author         @hexbenjamin
// @description    download stuff
// @resource       spliceCss splice.css
// @grant          GM.addStyle
// @grant          GM.getResourceUrl
// @grant          GM_getResourceFile
// ==/UserScript==

// [- styling]
let hbStyles = GM.addStyle(GM_getResourceFile(spliceCss));


// [> create empty div for button]
let zNode = document.createElement("div");

// [> add button to div]
zNode.innerHTML =
  '<button id="one_shots" class="hb-btn" type="button">one_shots</button>';

// [> set div id]
zNode.setAttribute("id", "hb-panel");

// [> add button to div]
document.body.appendChild(zNode);

// [> activate button]
document
  .getElementById("one_shots")
  .addEventListener("click", ButtonClickAction, false);

// [! called when one-shots button clicked]
function ButtonClickAction(zEvent) {
  console.log("click!");
}
