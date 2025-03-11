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

window.addEventListener("load", makeKeyStyles);
window.addEventListener("load", findKeyWords);

function findKeyWords() {
var aside = document.createElement("aside");
aside.setAttribute("id", "keywords")
document.body.append(aside);
aside.innerHTML += "<h1>Keyword List</h1>";
var ol = document.createElement("ol");
aside.appendChild(ol);
var keyWordElems = document.querySelectorAll("dfn");
var keyWords = Array.from(keyWordElems);
keyWords.sort();
for (var i=0; i< keyWordsElems.length; i++) {
   keyWords[i] = keyWordElems[i].textContent;
   var linkID = replaceWS(keyWords[i]);
   keyWordElems[i].setAttribute("id", "keyword" + linkID);
}
for (var i=0; i< keyWords.length; i++) {
   var keyWordListItem = document.createElement("li");
   var keyWordLink = document.createElement("a");
   var keyWordList = document.createElement
   keyWordLink.innerHTML = keyWords[i].textContent;
   var linkID;
   keyWordLink.setAttribute("href", "#keyword" +linkID);
}
}


function makeKeyStyles() {

}



/* Supplied Functions */

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}
