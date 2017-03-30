console.log("first line in JS file: ", Date.now());
var myRequest = new XMLHttpRequest();
var dinoContainer = document.getElementById("dinoContainer");

function makeDom(xhrData){
	var dinosaurString = "";
	var currentDinosaur;

	for (var i=0; i<xhrData.dinosaurs.length; i++){
		currentDinosaur = xhrData.dinosaurs[i];
		dinosaurString +=`<div class="col-sm-6 col-md-4">`;
		dinosaurString+=`<div class="thumbnail">`;
		dinosaurString+=`<img src="${currentDinosaur.url}">`
		dinosaurString+=`<div class="caption">`
		dinosaurString+=`<h3>${currentDinosaur.type}</h3>`
		dinosaurString+=`<p>My name is ${currentDinosaur.name} and I like to eat ${currentDinosaur.food}</p>`
		dinosaurString+=`</div></div></div>`;
	}
	dinoContainer.innerHTML= dinosaurString;
}

function executeThisCodeAfterFileLoaded(){
	console.log("Data returned: ", Date.now());
	var data = JSON.parse(this.responseText);

	makeDom(data);
}

function executeThisCodeAfterFileFails(){
	console.log("boooooo");
}

myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeAfterFileFails);
myRequest.open("GET","dinosaurs.json");
myRequest.send();
console.log("last line in JS file: ", Date.now());