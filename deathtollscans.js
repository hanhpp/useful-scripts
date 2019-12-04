// ==UserScript==
// @name         deathtollscans
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://reader.deathtollscans.net/*
// @grant        none
// ==/UserScript==

(function () {

    'use strict';
    console.log("Hi");
    var loc = document.location.href
    console.log(loc);
    var regexp = loc.match(/[0-9]{3}/g);
    console.log(regexp);
    var page = regexp[0];
    var intPage = parseInt(page, 10);
    var nextPage = intPage + 1;
    var prevPage = intPage - 1;
    console.log("next page : ", nextPage);
    var nextLoc = loc.replace(intPage, nextPage);
    console.log(nextLoc);

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            // up arrow
        }
        else if (e.keyCode == '40') {
            // down arrow
        }
        else if (e.keyCode == '37') {
            // left arrow
            var prevLoc = loc.replace(nextPage, prevPage);
            document.location.href = prevLoc;
        }
        else if (e.keyCode == '39') {
            document.location.href = nextLoc;
        }

    }





})();