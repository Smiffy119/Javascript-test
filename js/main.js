//When the window loads it will do the init function
window.onload = function() {
	//Calling the init function and getting the height and width of the window
	init(window.innerWidth, window.innerHeight);
}

//Init function
function init(width, height){
	//When called will print "init fired"
	console.log("init fired");
	//Creating a variable x and assigning it HTML for that id
	var x = document.getElementById("header");
	//Changing the colour of the text in the header
	x.style.color = "#03637A";
	//Printing the height and width of the window --> arguments passed when the function is called
	console.log("The screen width is " + width);
	console.log("The screen height is " + height);
}

//Created an alert box
function AlertButton(){
	alert("Hello! I am an alert box!");
}

//Created a prompt box for the website
function PromptButton(){
	//Created a variable for the user input
	var person = prompt("Please enter your name");
	//When an input has been entered, it changes the text in the header
	if (person != ""){
		document.getElementById("Author").innerHTML = "A website created by " + person + "!"
	}
}

function FortuneButton(){
	var NoOfChildren = prompt("Please enter a number: ");
	var PartnersName = prompt("Please enter a name");
	var Location = prompt("Please enter a location");
	var JobTitle = prompt("Please enter a job");
	if (NoOfChildren != "")&& (PartnersName != "") && (Location != "") && (JobTitle != "") &&{
		var text1 = NoOfChildren;
		alert("You will be a " + JobTitle + "in " + Location + ". Married to " + PartnersName + "with " + text1);
	}
		// 
		// alert()
	// }
}