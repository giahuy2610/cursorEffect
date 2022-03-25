const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let pointerX = 0;
let pointerY = 0;
let cursorX = 0;
let cursorY = 0;

let body = $("body");
body.

document.onmousemove = function(event) {
	pointerX = event.pageX;
	pointerY = event.pageY;
	cursorX = event.pageX;
	cursorY = event.pageY;	
}

setInterval(pointerCheck, 10);
function pointerCheck() {
	let cursor = $("#cursor");
    cursor.style.top = `${cursorY}px`;
    cursor.style.left = `${cursorX}px`;

	let pointer = $("#pointer");
    pointer.style.top = `${pointerY}px`;
    pointer.style.left = `${pointerX}px`;
}

function cursorHover() {
	let cursor = $("#cursor");
	let pointer = $("#pointer");
	cursor.classList.add("cursor-hover");
	pointer.classList.add("cursor-hover");
}

function cursorStopHover() {
	let cursor = $("#cursor");
	let pointer = $("#pointer");
	cursor.classList.remove("cursor-hover");
	pointer.classList.remove("cursor-hover");
}


