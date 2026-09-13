//your JS code here. If required.
let para = document.querySelector("#counter");
let btn = document.querySelector("#incrementBtn");

btn.addEventListener("click",() =>{
	let number = Number(para.innerText) + 1;
	para.innerText = number;
})