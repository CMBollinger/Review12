"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Review Assignment

   Author: Christian Bollinger
   Date:   3/5/25

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the _ character.

*/

window.addEventListener("onload", makeKeyStyles);
window.addEventListener("onload", findKeyWords);

function findKeyWords() {
var aside = document.createElement("aside");
document.getElementsByTagName("aside").setAttribute("id", "keywords")
var ol = document.createElement("ol")
aside.appendChild(ol);
var keyWordElems = document.querySelectorAll("dfn");
var keyWords = Array.from(keyWordElems);
for (i=0; i< keyWordElems; i++) {
   keyWords[i] = keyWordElems[i];
   var linkID = replaceWS(keyWords[i])
   keyWordElems[i].setAttribute("id","keyword" + linkID);
}
   keyWords.sort();

   for (i=0; i < keyWords; i++) {
      var keyWordListItem = document.createElement("li");
      var keyWordLink = document.createElement("a");
      keyWordLink[i].innerHTML(keyWords[i]);
      linkID[i];
      keyWordLink.setAttribute("href", "#keyword" + linkID[i]);
   }
}

function makeKeyStyles() {

}



/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
