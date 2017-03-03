const MaxNumberImg = 3;
var imgNumber = 1, imgOldNumber = 1; 
var sliderImageOver, sliderImage;
var images = new Array();
images[0] = new Image().src="images/img1.jpg";
images[1] = new Image().src="images/img2.jpg";
images[2] = new Image().src="images/img3.jpg";

$('document').ready(function(){
	sliderImage = $('.slider-image');
	sliderImageOver = $('#sliderImgOver');
	
	sliderImageOver[0].addEventListener('animationend', function(){
		sliderImageOver.css({'backgroundImage':'url(images/img'+imgNumber+'.jpg)'});
		sliderImageOver.removeClass('slider-image-over');
	});
	
	$(".btn-slider-left").click(btnLeftSliderClick);
	$(".btn-slider-right").click(btnRightSliderClick);
	
//	$(".btn-slider-left").mouseover(function(){
//		console.log('mouseover button left');
//	});
//	
//	$(".btn-slider-right").mouseover(function(){
//		console.log('mouseover button right');
//	});
});

var btnLeftSliderClick = function(){
	imgOldNumber = imgNumber;
	PlusImgNumber(-1);
	ChangeImage();
};

var btnRightSliderClick = function(){
	imgOldNumber = imgNumber;
	PlusImgNumber(1);
	ChangeImage();
};

function ChangeImage(){
	sliderImage.css(
	{
		'backgroundImage':'url('+images[imgNumber-1]+')'
	});
	
	sliderImageOver.toggleClass('slider-image-over');
	
	sliderImageOver.css(
	{
		'backgroundImage':'url('+images[imgOldNumber-1]+')'
	});
}


function PlusImgNumber(value){
	imgNumber = imgNumber + value; 
	if(imgNumber > MaxNumberImg) {
		imgNumber = MaxNumberImg; 
	} else if(imgNumber < 1) {
		imgNumber = 1;
	}
}