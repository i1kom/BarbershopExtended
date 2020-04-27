		var mainMenuOpen = document.querySelector(".main-navigation__menue-button_open");
		var mainMenuClose = document.querySelector(".main-navigation__menue-button_close");
		var mainMenu = document.querySelector(".main-navigation__lists-wrapper");
		//Элементы слайдера преимуществ
		var advantageBtn1 = document.querySelector(".advantages-slider-button1-js");
		var advantageBtn2 = document.querySelector(".advantages-slider-button2-js");
		var advantageBtn3 = document.querySelector(".advantages-slider-button3-js");
		var advantageSlide1 = document.querySelector(".main-advantages__slide-wrapper");
		var advantageSlide2 = document.querySelector(".main-advantages__slide-wrapper_second");
		var advantageSlide3 = document.querySelector(".main-advantages__slide-wrapper_third");
		
		
		mainMenu.classList.remove("main-navigation__lists-wrapper_no-js");
		
		//Работа главного меню
		mainMenuOpen.addEventListener("click", function(evt){
			mainMenuClose.classList.remove("visually-hidden");
			mainMenu.classList.remove("main-navigation__lists-wrapper_closed");
		});
		mainMenuClose.addEventListener("click", function(evt){
			mainMenuClose.classList.add("visually-hidden");
			mainMenu.classList.add("main-navigation__lists-wrapper_closed");
		});
		
		//Работа слайдера преимуществ
		advantageBtn1.addEventListener("click", function(evt){
			if (advantageSlide1.classList.contains("main-advantages__slide-wrapper_hidded")){
				advantageSlide1.classList.remove("main-advantages__slide-wrapper_hidded");
				advantageSlide2.classList.add("main-advantages__slide-wrapper_hidded");
				advantageSlide3.classList.add("main-advantages__slide-wrapper_hidded");
				advantageBtn1.classList.add("slider-buttons__button_active");
				advantageBtn2.classList.remove("slider-buttons__button_active");
				advantageBtn3.classList.remove("slider-buttons__button_active");
			}
		});
		advantageBtn2.addEventListener("click", function(evt){
			if (advantageSlide2.classList.contains("main-advantages__slide-wrapper_hidded")){
				advantageSlide1.classList.add("main-advantages__slide-wrapper_hidded");
				advantageSlide2.classList.remove("main-advantages__slide-wrapper_hidded");
				advantageSlide3.classList.add("main-advantages__slide-wrapper_hidded");
				advantageBtn1.classList.remove("slider-buttons__button_active");
				advantageBtn2.classList.add("slider-buttons__button_active");
				advantageBtn3.classList.remove("slider-buttons__button_active");
			}
		});
		advantageBtn3.addEventListener("click", function(evt){
			if (advantageSlide3.classList.contains("main-advantages__slide-wrapper_hidded")){
				advantageSlide1.classList.add("main-advantages__slide-wrapper_hidded");
				advantageSlide2.classList.add("main-advantages__slide-wrapper_hidded");
				advantageSlide3.classList.remove("main-advantages__slide-wrapper_hidded");
				advantageBtn1.classList.remove("slider-buttons__button_active");
				advantageBtn2.classList.remove("slider-buttons__button_active");
				advantageBtn3.classList.add("slider-buttons__button_active");
			}
		});