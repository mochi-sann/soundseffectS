var Sound = document.getElementById("Sound");

function pauseVideo() {
	//動画を一時停止
	v.pause();
}

function upVolume() {
	//音量を上げる
	v.volume = v.volume + 0.25;
}

function downVolume() {
	//音量を下げる
	v.volume = v.volume - 0.25;
}


document.body.addEventListener('keydown',
event => {
	if (event.key === 'q' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.class = "se" ;
		Sound.src = "audio/question.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'w' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/correct.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'e' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/incorrect.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'r' && event.ctrlKey) {
			var Sound = new Audio();
			Sound.src = "audio/drum-japanese2.mp3";
			Sound.currentTime = 0;
			Sound.play();}	
	if (event.key === 't' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/trumpet1.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'y' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/trumpet3.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'u' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/dondonpafupafu.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'i' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/drumroll.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'a' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/cheerandclap.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 's' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/claping1.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'd' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/everyone_laugh3.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'f' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/shock.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'g' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/tin.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'h' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/chan-chan1.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'j' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/chan-chan2.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'k' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/effect1.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'l' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/effect2.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === ';' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/effect3.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'z' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/timer.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'x' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/timer_fast.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'c' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/broadcasting-start.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'v' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/broadcasting-end.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'b' && event.ctrlKey) {
		var Sound = new Audio();
		var setClass= "se" ;
		Sound.src = "audio/chime1-1.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'n' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/police-whistle.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === 'm' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio/運命1.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === ',' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/click.mp3";
		Sound.currentTime = 0;
		Sound.play();}
	if (event.key === '.' && event.ctrlKey) {
		var Sound = new Audio();
		Sound.src = "audio_o/2click1.mp3";
		Sound.currentTime = 0;
		Sound.play();}

	
	
	}



);


setTimeout("redirect()", 0);
function redirect(){
//    location.href="https://sites.google.com/nnn.ed.jp/ycp-s-soundeffectbs/maintenance-s";
}
