var SpeechRecognition = window.webkitSpeechRecognition
var Recognition = new SpeechRecognition();

function start() {
    document.getElementById("text-box").innerHTML = "";

    Recognition.start();
}

Recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("text-box").innerHTML = content;
}
