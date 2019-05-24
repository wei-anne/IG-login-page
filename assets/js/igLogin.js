//********NOTE********
	//below I'm changing the elements's css of display, to hide or show the symbols in input boxes
	//while later on I found I could do it in much simple way, by changing the img source
	//if js, use .setAttribute("attribut", "link"); if jquery, use .attr("attribute", "link")
//

//animation

setInterval(nextImage, 6000);

var aniPics = $(".aniPics");
var curImage = 0;
var numImages = 4;

function nextImage() {
	//remove showMe class from current image
	var e;
	e = $(aniPics) [curImage];
	$(e).removeClass("showMe");

	//compute next image
	curImage++;
	if (curImage > numImages - 1) {
		curImage = 0;
	}

	//add showMe class to next image
	e = $(aniPics) [curImage];
	$(e).addClass("showMe");
}

//input box 1

var text1 = $('.labIn-1 input[type="text"]');
var label1 = $(".labIn-1 label");

$(text1).on("input", function() {
	var textV = text1.val();
	if(!textV) {
		$(this).removeClass("textTyped");
		$(label1).removeClass("labelShrinked");
	} else {
		$(this).addClass("textTyped");
 		$(label1).addClass("labelShrinked");
 	}
});

var sym1a = $(".sym1a");
var sym1b = $(".sym1b")

$(text1).blur(function() {
	var textV = text1.val();
	var phoneRegex = /(886|0)([0-9]{9})$/;
	var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (phoneRegex.test(textV) || emailRegex.test(textV)) {
		sym1a.css("display", "block");
	} else {
		sym1b.css("display", "block");
	}
});

$(text1).focus(function() {
	sym1a.css("display", "none");
	sym1b.css("display", "none");
});

//input box 2

var text2 = $('.labIn-2 input[type="text"]');
var label2 = $(".labIn-2 label");

$(text2).on("input", function() {
	var textV = text2.val();
	if(!textV) {
		$(this).removeClass("textTyped");
		$(label2).removeClass("labelShrinked");
	} else {
		$(this).addClass("textTyped");
 		$(label2).addClass("labelShrinked");
 	}
});

var sym2a = $(".sym2a");
var sym2b = $(".sym2b")

$(text2).blur(function() {
	var textV = text2.val();
	if (textV) {
		sym2a.css("display", "block");
	} else {
		sym2b.css("display", "block");
	}
});

$(text2).focus(function() {
	sym2a.css("display", "none");
	sym2b.css("display", "none");
});

//input box 3

var text3 = $('.labIn-3 input[type="text"]');
var label3 = $(".labIn-3 label");

$(text3).on("input", function() {
	var textV = text3.val();
	if(!textV) {
		$(this).removeClass("textTyped");
		$(label3).removeClass("labelShrinked");
	} else {
		$(this).addClass("textTyped");
 		$(label3).addClass("labelShrinked");
 	}
});

var sym3a = $(".sym3a");
var sym3b = $(".sym3b");
var sym3c = $(".sym3c");

$(text3).blur(function() {
	var textV = text3.val();
	if (textV) {
		sym3a.css("display", "block");
		sym3b.css("display", "block");
	}
});

$(sym3b).on("click", function() {
	sym3a.css("display", "none");
	sym3b.css("display", "none");
	sym3c.css("display", "block");
	text3.val("ARTIFICIAL USERNAME");
});

//input box 4

var text4 = $('.labIn-4 input[type="password"]');
var label4 = $(".labIn-4 label");
var sym4c = $(".sym4c");
var sym4a = $(".sym4a");
var sym4b = $(".sym4b");

$(text4).on("input", function() {
	var textV = text4.val();
	if(!textV) {
		$(this).removeClass("textTyped");
		$(label4).removeClass("labelShrinked");
		$(sym4c).css("display", "none");
	} else {
		$(this).addClass("textTyped");
 		$(label4).addClass("labelShrinked");
 		$(sym4c).css("display", "block");
 	}
});

$(text4).blur(function() {
	var textV = text4.val();
	if (textV.length >= 7 && textV.length < 30) {
 		$(sym4a).css("display", "block");
 		$(sym4b).css("display", "none");
 	} else {
 		$(sym4b).css("display", "block");
 		$(sym4a).css("display", "none");
 	}
 });

	//using vanilla js to change input type; since IE does not support, jquery forbids this change to keep consistence in all browsers

var hideOrShow = document.getElementsByClassName("sym4c");

hideOrShow[0].addEventListener("click", function() {
	var pass = document.getElementById("pass");
	if (pass.type === "password") {
		pass.type = "text";
		this.textContent = "隱藏";
	} else {
		pass.type = "password";
		this.textContent = "顯示";
	}
});











