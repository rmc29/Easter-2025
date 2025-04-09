const name = ["Ellie", "Harper", "Linda", "Frank", "Zara", "Andrew", "James", "Becky", "Ben", "Rose", "Dave", "Tom ", "Katie", "Doreen", "Naomi", "Chloe ", "Ruth", "Emma", "Edward", "Ashley", "Julia", "John", "Ali", "Rob ", "Stuart ", "Dawn", "Simon"]
const noun = ["his parents", "her friend", "coffee beans", "the universe", "a coffee shop", "world peace", "the letter Q", "a duck", "potatoes", "an Easter card", "their house", "the road", "his car", "his job", "money", "existential terror", "an iPhone", "the Riemann hypothesis ", "cheesecake", "her sister", "her brother", "his sister", "his brother", "her parents", "a fruit smoothie", "a milkshake", "a cappuccino", "baked beans", "green beans", "jumping beans", "black beans"];

/* Question object:
ID 
Reference to list of options, e.g. names, verbs, etc
Correct answer for this question
Currently selected answer */
class Question {
	constructor(optionlist, correctAnswer) {
		this.optionlist = optionlist;
		this.correctAnswer = correctAnswer;
	}

}


var questions = [
new Question(name,"James"), 
new Question(name,"Linda"),
new Question(noun, "his car")
];

function goInside() { //todo once we have >2 locations, change these to be more general and to make the chosen location visible and all others hidden
	display("indoor", true);
	display("outdoor", false);

}

function goOutside() {
	display("indoor", false);
	display("outdoor", true);

}

function display(id, value) {
	//console.log(id, value)
	document.getElementById(id).style.display = value ? "block" : "none";
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
	console.log(q);
	q.optionlist.sort();
	optionstring = q.optionlist.reduce(makeDropdown);
	
	//for each option, concat  <option value="v">V</option>
	//if user already selected an answer, <option value="v" selected>V</option>
	el.innerHTML += optionstring;
}


function populateForm() {
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



