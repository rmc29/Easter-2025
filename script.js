const name = ["Ellie", "Harper", "Linda", "Frank", "Zara", "Andrew", "James", "Becky", "Ben", "Rose", "Dave", "Tom ", "Katie", "Doreen", "Naomi", "Chloe ", "Ruth", "Emma", "Edward", "Ashley", "Julia", "John", "Ali", "Rob ", "Stuart ", "Dawn", "Simon"].sort();
const noun = ["his parents", "her friend", "coffee beans", "the universe", "a coffee shop", "world peace", "the letter Q", "a duck", "potatoes", "an Easter card", "their house", "the road", "his car", "his job", "money", "existential terror", "an iPhone", "the Riemann hypothesis ", "cheesecake", "her sister", "her brother", "his sister", "his brother", "her parents", "a fruit smoothie", "a milkshake", "a cappuccino", "baked beans", "green beans", "jumping beans", "black beans"].sort();
const direction = ["north", "south", "east", "west", "ana", "kata", "rimward", "hubward", "downward", "upward"].sort();;
const verb = ["visit", "deliver", "eat ", "drink", "kill", "defenestrate ", "seduce", "reverse-engineer", "buy", "sell ", "crash into", "analyse", "find", "apologise to", "drive ", "order", "fix", "break", "return", "transmute", "advertise"].sort();
const month = Array.from({length: 13}, (value, index) => {
  return new Date(0, index-1).toLocaleString('en-GB', {month: 'long'})
});
const date = Array.from({ length: 32 }, (value, index) => index);
const year = Array.from({ length: 27},  (value, index) => 1999 + index);

const formText = "On 0 1 2, 3 crashed into 4 with 5."

const locations = ["indoor", "outdoor", "road", "coffeeshop", /*"upstairs"*/];


/* Question object:
Reference to list of options, e.g. names, verbs, etc
Correct answer for this question */
class Question {
	constructor(optionlist, correctAnswer) {
		this.optionlist = optionlist;
		this.correctAnswer = correctAnswer;
	}

}


var questions = [
new Question(date,2), 
new Question(month,"February"),
new Question(year, 2001),
new Question(name,"James"), 
new Question(name,"Linda"),
new Question(noun, "his car")
];

function go(targetLocation) { 
	locations.forEach(hide); 
	display(targetLocation);
	display("answerbutton");

}

function display(id) {
	document.getElementById(id).style.display = "block";
}


function hide(id) {
	console.log(id);
	document.getElementById(id).style.display = "none";
}

//warning popup if on mobile
 function detectMob() {
	if (( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 )) { //todo check these numbers both ways
		alert("Happy Easter! I recommend viewing this on desktop because it's built in old-school JavaScript without any of that newfangled responsive design stuff.");
	}
}
/*called for each answer in a question's answer list*/
function makeDropdown(optionstring, thisoption, index, array) {
	return optionstring + "<option value='" + thisoption + "'>" + thisoption + "</option>"; 
}

function populateDropdown(q, index) {
	el = document.getElementById(index); //todo consider making the element IDs e.g. "q1" rather than "1"
	//console.log(q);
	//q.optionlist.sort();
	optionstring = q.optionlist.reduce(makeDropdown);
	
	//for each option, concat  <option value="v">V</option>
	//if user already selected an answer, <option value="v" selected>V</option>
	el.innerHTML += optionstring;
}


function populateForm() {
	
	//On <select id="0" onchange="checkAnswers();"></select> <select id="1" onchange="checkAnswers();"></select> <select id="2" onchange="checkAnswers();"></select>,
	t = formText.replace(/([0-9]+)/g, "<select id='$1' onchange='checkAnswers();'></select>");
	console.log(t);
	document.getElementById("form").innerHTML = t;
	questions.forEach(populateDropdown);
}

function isAnswerCorrect(value, index) {
		return (document.getElementById(index).value == value.correctAnswer);
}

function checkAnswers() {
	console.log("check");
	if (questions.every(isAnswerCorrect)) console.log("correct!")
}

function start() {
	 detectMob();
	 populateForm();
}



