
var audio_key;
var n=0;
	currentTime: null ,
	document.getElementsByClassName( setClass ) ;
document.onkeydown = 
function keydown(e) {
	if(n==0 && e.keyCode == '65') {
	 audio_key = new Audio();
	 audio_key.src = "audio_o/correct.mp3";
	 audio_key.play();
	 n=n+1;
    }

	if(n==0 && e.keyCode == '83') {
	audio_key = new Audio();
	audio_key.src = "audio_o/correct.mp3";
	audio_key.play();
	n=n+1;
	}

function stopCurrentSounds()
{
	var currentSound = document.getElementById( Sounds.currentTime ) ;

	if( currentSound != null )
	{
		currentSound.pause() ;
		currentSound.currentTime = 0 ;
	}
}

if( typeof( Sounds.flag[ file ] )=="undefined" || Sounds.flag[ file ] != 1 );




}






window.addEventListener('DOMContentLoaded', function(){
	const btn_play = document.getElementById("btn_play");
	const btn_pause = document.getElementById("btn_pause");
	const btn_mute = document.getElementById("btn_mute");
	const slider_volume = document.getElementById("volume");
	const audioElement = document.querySelector("audio");
  
	// ボリュームの初期設定
	audioElement.volume = slider_volume.value;
  
	btn_play.addEventListener("click", e => {
	  audioElement.play();
	});
  
	btn_pause.addEventListener("click", e => {
	  audioElement.pause();
	});
  
	btn_mute.addEventListener("click", e => {
  
	  if( audioElement.muted ) {
		audioElement.muted = false;
		btn_mute.textContent = "消音";
	  } else {
		audioElement.muted = true;
		btn_mute.textContent = "消音解除";
	  }
	});
  
	slider_volume.addEventListener("input", e => {
	  audioElement.volume = slider_volume.value;
	});
  });