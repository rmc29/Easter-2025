const name = ["(Name)", "Ellie", "Harper", "Linda", "Frank", "Zara", "Andrew", "James", "Becky", "Ben", "Rose", "Dave", "Tom ", "Katie", "Doreen", "Naomi", "Chloe", "Ruth", "Emma", "Ed", "Ashton", "Julia", "John", "Ali", "Rob", "Stuart", "Dawn", "Simon", "Geoff"].sort();
const noun = ["(noun)", "his parents", "her friend", "coffee beans", "the universe", "a coffee shop", "world peace", "the letter Q", "a duck", "potatoes", "an Easter card", "their house", "the road", "his car", "his job", "money", "existential terror", "an iPhone", "the Riemann hypothesis ", "cheesecake", "her sister", "her brother", "his sister", "his brother", "her parents", "a fruit smoothie", "a milkshake", "a cappuccino", "baked beans", "green beans", "jumping beans", "black beans"].sort();
const place = ["(place)", "Woodley", "Bellington", "Farley", "Norton", "Harpton", "Mereham" ].sort();
const direction = ["(direction)","north", "south", "east", "west", "downward", "upward","ana", "kata", "rimward", "hubward" ];
const verb = ["(verb)","visit", "deliver", "eat", "drink", "kill", "defenestrate", "seduce", "reverse-engineer", "buy", "sell", "crash into", "analyse", "find", "apologise to", "drive", "order", "fix", "break", "return", "transmute", "advertise", "chat to"].sort();
const verbed = ["(verbed)","visited", "delivered", "ate", "drank", "killed", "defenestrated", "seduced", "reverse-engineered", "bought", "sold", "crashed into", "analysed", "found", "apologised to", "drove", "ordered", "fixed", "broke", "returned", "transmuted", "advertised", "chatted to"].sort();
const verbing = ["(verbing)","visiting", "delivering", "eating", "drinking", "killing", "defenestrating", "seducing", "reverse-engineering", "buying", "selling", "crashing into", "analysing", "finding", "apologising to", "driving", "ordering", "fixing", "breaking", "returning", "transmuting", "advertising", "chatting to"].sort();
const month = Array.from({length: 12}, (value, index) => {
  return new Date(0, index).toLocaleString('en-GB', {month: 'long'})
});
month.unshift("(Month)");
const date = Array.from({ length: 31 }, (value, index) => index+1);
date.unshift("(Date)");
const year = Array.from({ length: 26},  (value, index) => 2000 + index);
year.unshift("(Year)");
const hour = Array.from({ length: 12 }, (value, index) => index);
hour.unshift("(Hour)");
const day = ["(Weekday)", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


/* const formText = "Linda Harper and her husband Frank have four grown-up children, who are, in birth order, Ellie, X, X and Becky.<br>
On Saturday the 7th April, 2012, at about 5pm, Andrew Harper was driving north, to visit his parents, and crashed into Dave Stuart, who was driving south from Woodley to Bellington, to deliver coffee beans.<br>
Meanwhile, Becky was chatting to her friend Zara, and Ellie was at a coffee shop in X, where she ordered a fruit smoothie from Geoff the barista." */

const formText = [
"0 1 and her husband 2 have four grown-up children, who are, in birth order, 3, 4, 5 and 6.",
"On 0 1 2, 3, at about 4 pm, 5 6 was 7 8, to 9 10, and 11 12 13, who was 14 15 from 16 to 17, to 18 19.",
 "Meanwhile, 0 (and her mother) were 1 2 3, and 4 was at 5 in 6, where she 7 8 from 9 the barista.",
 ];

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

[
new Question(name,"Linda"), 
new Question(name,"Harper"),
new Question(name,"Frank"),
new Question(name,"Ellie"),
new Question(name,"Andrew"),
new Question(name,"James"),
new Question(name,"Becky")
],

[
new Question(day,"Saturday"),
new Question(date,"7"),
new Question(month,"April"),
new Question(year, "2012"),

new Question(hour,"5"), 
new Question(name,"Andrew"), 
new Question(name,"Harper"),
new Question(verbing, "driving"),
new Question(direction, "south"), 
new Question(verb, "visit"),
new Question(noun, "his parents"),
new Question(verbed, "crashed into"),
new Question(name,"Ed"), 
new Question(name,"Stuart"),

new Question(verbing, "driving"),
new Question(direction, "north"),
new Question(place, "Woodley"),
new Question(place, "Bellington"),
new Question(verb, "deliver"),
new Question(noun, "coffee beans")
],

[
new Question(name,"Becky"),
new Question(verbing,"chatting to"),
new Question(noun, "her friend"),
new Question(name,"Zara"),

new Question(name,"Ellie"),
new Question(noun, "a coffee shop"),
new Question(place, "Bellington"), 
new Question(verbed, "ordered"),
new Question(noun, "a fruit smoothie"),
new Question(name, "Geoff")
]
]


function go(targetLocation) { 
	locations.forEach(hide); 
	display(targetLocation);
	display("answerbutton");

}

function display(id) {
	document.getElementById(id).style.display = "block";
}


function hide(id) {
	//console.log(id);
	document.getElementById(id).style.display = "none";
}

//warning popup if on mobile
 function detectMob() {
	if (( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 )) { //todo check these numbers both ways
		alert("Happy Easter! I recommend viewing this on desktop because it's built in old-school JavaScript without any of that newfangled responsive design stuff.");
	}
}
/*called for each answer in a question's answer list*/
function makeDropdown(optionstring, thisoption) {
	//console.log(optionstring, thisoption);
	return optionstring + "<option value='" + thisoption + "'>" + thisoption + "</option>"; 

}

function populateDropdown(q, index) {
	id = this + "-" + index;
	//console.log(id);
	el = document.getElementById(id); 
	optionstring =  "";
	optionstring = q.optionlist.reduce(makeDropdown, optionstring);
	
	//for each option, concat  <option value="v">V</option>
	//if user already selected an answer, <option value="v" selected>V</option>
	el.innerHTML += optionstring;
}


function populateForm() {
	
	//On <select id="0" onchange="checkAnswers();"></select> <select id="1" onchange="checkAnswers();"></select> <select id="2" onchange="checkAnswers();"></select>,
	for (i in [0,1,2]) {
		t = "<div class='answerform incorrect' id='form" + i + "'>";
		t += formText[i].replace(/([0-9]+)/g, "<select id='" + i + "-$1' onchange='checkAnswers();'></select>");
		t += "</div>";
		document.getElementById("form").innerHTML += t;
		questions[i].forEach(populateDropdown, i);
		//console.log(t);

	}
	//questions.flat().forEach(populateDropdown);
	
}

function isAnswerCorrect(question, index) {
		//console.log(question + " " + this);
		return (document.getElementById(this + "-" + index).value == question.correctAnswer);
		
}
	
//Add the "correct" class to an element, which styles it green	
function addCorrectClass(el) {
	
	//console.log(el);
	el.classList.add("correct");
	el.classList.add("greentext");
	
}
//add disabled attribute - locking the correct answers in
function lockIn(el) {
	
	//console.log(el);
	el.disabled = true;
	el.classList.add("greentext");
}

function checkAnswers() {
 //check each form separately, make the correct ones green; proceed to success state if all 3 correct

	score = 0;
	for (i in [0,1,2]) {
		formid = "form" + i;
		if (questions[i].every(isAnswerCorrect, i) || tmp==1) {
			//console.log(formid + " correct!")
			addCorrectClass(document.getElementById(formid));	
			Array.from(document.getElementById(formid).children).forEach(lockIn);
			score++;
			
		}
	}
	
	if (score == 3 || tmp==1) {
		console.log("all correct!")
		for (i of ["notes", "form", "form-container"]) {
			addCorrectClass(document.getElementById(i));
		}
	display("credits-modal");
	}
}

function start() {
	 detectMob();
	 populateForm();
	 	tmp=0;
}

function fadeText(el) {
	el.classList.add("textfade");
}

function finish() {
	document.getElementById("url").style.color="purple";
	credits = document.getElementById("credits");
	msgLetters = Array.from(document.getElementsByClassName("msg"));
	
	
	credits.classList.add("bgfade")	
	msgLetters.forEach(fadeText);
 //todo make it stay on the final values at the end
	
}



