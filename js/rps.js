$(document).ready(function(){

//hide images when document loads
	$('.pictures').hide();

	$('#fire').click(fire);
	$('#water').click(water);
	$('#earth').click(earth);
	$('#scorereset').click(reset);

});

var elements = ["fire","water","earth"];
var userPick;
var compPick;
var win = 0;
var lose = 0;
var draw = 0;

	function fire(){
			userPick = "fire";
			$('.pictures').hide();
			compPick = compChoice();
			console.log(compPick);
			$('.userelements .imgfire').show();
			compare(userPick, compPick);	
			clear();
	}

	function water() {
			userPick = "water";
			$('.pictures').hide();
			compPick = compChoice();
			console.log(compPick);
			$('.userelements .imgwater').show();
			compare(userPick, compPick);
			clear();
	}

	function earth() {
			userPick = "earth";
			$('.pictures').hide();
			compPick = compChoice();
			console.log(compPick);
			$('.userelements .imgearth').show();
			compare(userPick, compPick);
	}

function compChoice(){
		compPick = Math.floor(Math.random()*elements.length);
		compPick = elements[compPick];
		return compPick
	}

function clear() {
	$('.pictures').hide();
}

function reset(){
	$('.score').html('0');
	 win = 0;
	 lose = 0;
	 draw = 0;
}

function compare(user, comp){

//show "vs" image when user clicks 
		$('.fight').show();

		if (userPick == "fire" && compPick == "water") {
			$('.compelements .imgwater').show();
			alert('You Lose: Let off some steam Bennett');
			lose++;
		} else if (userPick == "fire" && compPick == "earth") {
			$('.compelements .imgearth').show();
			alert('You Win: There was a fire fight!');
			win++;
		} else if (userPick == "water" && compPick == "fire") {
			$('.compelements .imgfire').show();
			alert('You Win: Cool em off');
			win++;
		} else if (userPick == "water" && compPick == "earth"){
			$('.compelements .imgearth').show();
			alert('You Lose: Stop feeding them');
			lose++; 
		} else if (userPick == "earth" && compPick == "water") {
			$('.compelements .imgwater').show();
			alert('You Win: You are very hydrated');
			win++;
		} else if (userPick == "earth" && compPick == "fire") {
			$('.compelements .imgfire').show();
			alert('You Lose: The roof is on fire');
			lose++;
		} else if (userPick == compPick) {
		//How to make both images show when it's a tie?!?!?!
			
			if (userPick == "fire") {
				$('.compelements .imgfire').show();
			} else if (userPick == "water") {
				$('.compelements .imgwater').show();
			} else if (userPick == "earth") {
				$('.compelements .imgearth').show();
			}
			
			alert('You and your opponent are equally worthless (TIE)');
			draw++;
		}

		//update counters on the screen
		$('#win').html(win);
		$('#lose').html(lose);
		$('#draw').html(draw);
}