'use strict';

const INTERVAL = 250;
const SEP = "=====\n";

var text = null;
var index = 0;
var intervalId = null;
var frames = null;

var animationInterval = INTERVAL;


function fontSizeChanged() {
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

function speedChanged() {
    var turbo = document.getElementById("turbo");
    animationInterval = turbo.checked ? 50 : INTERVAL;
    var tmp = text;
    startAnimationInterval();
    text = tmp;
}

function animationChanged() {
    var animation = document.getElementById("animation");
    var animString = ANIMATIONS[animation.value];
    frames = animString.split(SEP);
    index = 0;
}

function startAnimationInterval() {
    var textarea = document.getElementById("text-area");
    text = textarea.value;

    if (intervalId)
        clearInterval(intervalId);
    
    if (!frames)
        return;

    intervalId = setInterval(function() {
        textarea.value = frames[index++];
        if (index == frames.length)
            index = 0;
    }, animationInterval);
}

function stopAnimationInterval() {
    if (!intervalId) {
        return;
    }
    clearInterval(intervalId);
    var textarea = document.getElementById("text-area");
    textarea.value = text;
}

function onStartClicked() {
    var startElem = document.getElementById("start");
    startElem.disabled = true;
    
    var stopElem = document.getElementById("stop");
    stopElem.disabled = false;

    startAnimationInterval();
}

function onStopClicked() {
    var startElem = document.getElementById("start");
    startElem.disabled = false;
    
    var stopElem = document.getElementById("stop");
    stopElem.disabled = true;

    index = 0;
    stopAnimationInterval();
}

