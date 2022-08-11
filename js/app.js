



function isWebp(){
	function testWebp(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function (){
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";

	}
	testWebp(function (support){
		let className = support = true ? "webp" : "no-webp";
		document.documentElement.classList.add(className);
	})
}
	
isWebp();



const btnBurger = document.querySelector(".header__burger");
const burger = document.querySelector(".burger__open");









btnBurger.addEventListener("click", item =>{
		btnBurger.classList.toggle("close");
});



btnBurger.addEventListener("click", ()=>{
		burger.classList.toggle("burger__open-active");
		btnBurger.classList.remove("header__burger_close");
});



let lang = document.querySelector(".language__text");


window.addEventListener("click", function(e){
	if(e.target.className === "language__text" || e.target.className === "language__arrow"){

		if(lang.innerText === "UA"){
			lang.innerText = "EN"
		}else{
			lang.innerText = "UA"
		}		
	}






if(e.target.className === "slider__arrow-next"){
	let currentDay = document.querySelector(".net__track-day-day");
	let dayNum = parseInt(currentDay.innerText);
	if(dayNum<31){
		currentDay.innerText = ++dayNum;
	}
}






if(e.target.className === "slider__arrow-prev"){
	let currentDay = document.querySelector(".net__track-day-day");
	let dayNum = parseInt(currentDay.innerText);
	if(dayNum>1){
		currentDay.innerText = --dayNum;
	}
	
}



})



let header = document.querySelector("header");

window.addEventListener("scroll", ()=>{
	if(scrollY>150){
		header.classList.add("header__scroll");
	}else{
		header.classList.remove("header__scroll");
	}
})




 new Swiper(".swiper", {

		navigation: {	
			nextEl: ".slider__arrow-next",
			prevEl: ".slider__arrow-prev",	
		},
	


		loop: true,
		effect: "flip",
		touchRatio: 0,
});




setInterval(swiperWork, 10);


function swiperWork(){
	let num = document.querySelector(".net__track-day-day").innerText;
	if(num === "31"){
		document.querySelector(".slider__arrow-next").style.pointerEvents = "none";
	}else{
		document.querySelector(".slider__arrow-next").style.pointerEvents = "auto";
	}
	if(num === "1"){
		document.querySelector(".slider__arrow-prev").style.pointerEvents = "none";
	}else{
		document.querySelector(".slider__arrow-prev").style.pointerEvents = "auto";
	}
}

//calendar bd


let allDay = document.querySelectorAll(".calendar__init-item");

allDay.forEach((item)=>{
		item.addEventListener("click", (item)=>{

			for(i=0; i<allDay.length; ++i){
				allDay[i].classList.remove("calendar__item-elect");
			}

			item.target.classList.add("calendar__item-elect");
		});
});







new Swiper(".cars__slider", {

	navigation: {	
		nextEl: ".sli",
		prevEl: ".sl",	
	},
	loop: true,
	effect: "fade",
	thumbs: {
		swiper: {
			el: ".cars__slider-mini",
			breakpoints: {
				0: {
					slidesPerView: 1.5,
					centeredSlides: true,
					loop: true,
					spaceBetween: 0,
				},
				600: {
					slidesPerView: 3,
					loop: true,
				},
				992: {
					slidesPerView: 4,
					loop: false,
					centeredSlides: false,
				},
			},
		},
	},
});


new Swiper (".reviews__slider", {
	loop: true,
	
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		},
	},
	navigation: {
		nextEl: ".reviews__arrow-next",
		prevEl: ".reviews__arrow-prev",
	},
	pagination: {
		el: ".reviews__pagination",
		clickable: true,
	},
})

//akardeon


let btnAkardeon = document.querySelectorAll(".subfooter__section-title");


btnAkardeon.forEach(item=>{
	item.addEventListener("click", ()=>{
		item.nextElementSibling.classList.toggle("akardeon__active");
		item.querySelector(".subfooter__section-title-img").classList.toggle("akardeon__img")
})
})






////forms



const btnForm = document.querySelector(".form__btn");
const formName = document.querySelector("#userName");
const formEmail = document.querySelector("#userEmail");
const formArea = document.querySelector("textarea");
const formChebox = document.querySelector(".custom-checkbox");

let regName = /^[а-яА-Яa-zA-ZЄ-ЯҐа-їґ]{3,}$/;
let regEmail = /^[a-zA-Z0-9_]+@[a-z0-9-]+\.[a-z]{2,6}$/;
let regArea = /[а-яА-Яa-zA-ZЄ-ЯҐа-їґ]{3,}/;




btnForm.addEventListener("click", ()=>{
	///name
	if(regName.test(formName.value)){
		formName.style.borderBottom = "1px solid green";
	}else{
		formName.style.borderBottom = "1px solid red";
	}
	//gmail
	if(regEmail.test(formEmail.value)){
		formEmail.style.borderBottom = "1px solid green";
	}else{
		formEmail.style.borderBottom = "1px solid red";
	}
	//textarea
	if(regArea.test(formArea.value)){
		formArea.style.borderBottom = "1px solid green";
	}else{
		formArea.style.borderBottom = "1px solid red";
	}
	//checkbox
	if(formChebox.checked){
		document.querySelector(".form__wr").classList.remove("checkbox__invalid");
		document.querySelector(".form__wr").classList.add("checkbox__valid");
	}else{
		document.querySelector(".form__wr").classList.remove("checkbox__valid");
		document.querySelector(".form__wr").classList.add("checkbox__invalid");
	}
});