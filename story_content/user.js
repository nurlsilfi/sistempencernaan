function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6K5n5f5qCIh":
        Script1();
        break;
      case "6rjz9SqtVt3":
        Script2();
        break;
      case "5tc9zix0FVp":
        Script3();
        break;
      case "6U2qP0k4z59":
        Script4();
        break;
      case "6oGX5OIDrkt":
        Script5();
        break;
      case "5sDnbmeLiiS":
        Script6();
        break;
      case "6OmRb9YGRdQ":
        Script7();
        break;
      case "69YktIinlr4":
        Script8();
        break;
      case "68dVdmaFghJ":
        Script9();
        break;
      case "67SEp8nfwyl":
        Script10();
        break;
      case "5nDJ6T0839J":
        Script11();
        break;
      case "6DhwDBWWQZn":
        Script12();
        break;
      case "6AvRPx1vRXX":
        Script13();
        break;
      case "64HjE4tUlBK":
        Script14();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
 var line = document.createElement("audio");
 var head=document.getElementsByTagName('body')[0];
 line.type = "audio/mp3";
 line.src="";
 line.id="bgSong" ;
 line.autoplay = true;
 line.loop = true;
 head.appendChild(line);
}
//but we only want to add these once!
if(document.getElementById('bgSong')==null){
 add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}
var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.5;
}

function Script7()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("timer",sec);
  if (sec == 20) {
    clearInterval(timerId);
  }
}

//Start the timer
timerId=setInterval(startTimer,1000);

}

function Script8()
{
  clearInterval(timerId);
let sec = 0;

}

function Script9()
{
  //Getting the player
const player = GetPlayer();

//Where to start
let sec = 0;

//Set up the timer
function startTimer(){
  sec += 1;
  player.SetVar("timer",sec);
  if (sec == 20) {
    clearInterval(timerId);
  }
}

//Start the timer
timerId=setInterval(startTimer,1000);

}

function Script10()
{
  clearInterval(timerId);
let sec = 0;

}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script14()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

