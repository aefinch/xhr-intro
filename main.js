var myRequest = new XMLHttpRequest();
function executeThisCodeAfterFileLoaded(){
	console.log("IT WORKED!!!");
}

function executeThisCodeAfterFileFails(){
	console.log("boooooo");
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","dinosaurs.json");
myRequest.send();
console.log("myRequest", myRequest);