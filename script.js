const name = ["(Name)", "Ellie", "Harper", "Linda", "Frank", "Zara", "Andrew", "James", "Becky", "Ben", "Rose", "Dave", "Tom ", "Katie", "Doreen", "Naomi", "Chloe", "Ruth", "Emma", "Ed", "Ashton", "Julia", "John", "Ali", "Rob", "Stuart", "Dawn", "Simon"].sort();
const noun = ["(noun)", "his parents", "her friend", "coffee beans", "the universe", "a coffee shop", "world peace", "the letter Q", "a duck", "potatoes", "an Easter card", "their house", "the road", "his car", "his job", "money", "existential terror", "an iPhone", "the Riemann hypothesis ", "cheesecake", "her sister", "her brother", "his sister", "his brother", "her parents", "a fruit smoothie", "a milkshake", "a cappuccino", "baked beans", "green beans", "jumping beans", "black beans"].sort();
const place = ["(place)", "Woodley", "Bellington", "Farley", "Norton", "Harpton", "Mereham" ].sort();
const direction = ["(direction)","north", "south", "east", "west", "downward", "upward","ana", "kata", "rimward", "hubward" ];
const verb = ["(verb)","visit", "deliver", "eat", "drink", "kill", "defenestrate", "seduce", "reverse-engineer", "buy", "sell", "crash into", "analyse", "find", "apologise to", "drive", "order", "fix", "break", "return", "transmute", "advertise"].sort();
const verbed = ["(verbed)","visited", "delivered", "ate", "drank", "killed", "defenestrated", "seduced", "reverse-engineered", "bought", "sold", "crashed into", "analysed", "found", "apologised to", "drove", "ordered", "fixed", "broke", "returned", "transmuted", "advertised"].sort();
const verbing = ["(verbing)","visiting", "delivering", "eating", "drinking", "killing", "defenestrating", "seducing", "reverse-engineering", "buying", "selling", "crashing into", "analysing", "finding", "apologising to", "driving", "ordering", "fixing", "breaking", "returning", "transmuting", "advertising"].sort();
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
"On 7 8 9, 10, at about 11 pm, 12 13 was 14 15, to 16 17, and 18 19 20, who was 21 22 from 23 to 24, to 25 26.",
 "Meanwhile, 27 was 28 29 30, and 31 was at 32 in 33, where she 34 35 from 36 the barista.",
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
new Question(name,"Linda"), 
new Question(name,"Harper"),
new Question(name,"Frank"),
new Question(name,"Ellie"),
new Question(name,"Andrew"),
new Question(name,"James"),
new Question(name,"Becky"),
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
new Question(verb, "coffee beans"),
new Question(name,"Becky"),
new Question(verbing,"chatting to"),
new Question(noun, "her friend"),
new Question(name,"Zara"),

new Question(name,"Ellie"),
new Question(noun, "a coffee shop"),
new Question(place, "Bellington"), 
new Question(verbed, "ordered"),
new Question(noun, "a fruit smoothie"),
new Question(name, "Geoff"),
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
function makeDropdown(optionstring, thisoption, index, array) {
	//console.log(optionstring, thisoption);
	return optionstring + "<option value='" + thisoption + "'>" + thisoption + "</option>"; 
	//return optionstring + "<option value='" + thisoption + "' style='color:" + (index ? "black" : "gray") + "'>" + thisoption + "</option>"; 
	//return optionstring + "<option " + (index ? "" : "disabled selected") + " value='" + thisoption + "'>" + thisoption + "</option>"; 
}

function populateDropdown(q, index) {
	el = document.getElementById(index); //todo consider making the element IDs e.g. "q1" rather than "1"
	//console.log(q);
	//q.optionlist.sort();
	optionstring =  "";
	optionstring = q.optionlist.reduce(makeDropdown, optionstring);
	
	//for each option, concat  <option value="v">V</option>
	//if user already selected an answer, <option value="v" selected>V</option>
	el.innerHTML += optionstring;
}


function populateForm() {
	
	//On <select id="0" onchange="checkAnswers();"></select> <select id="1" onchange="checkAnswers();"></select> <select id="2" onchange="checkAnswers();"></select>,
	for (i in [0,1,2]) {
		t = "<div class='answerform' id='form" + i + "'>";
		t += formText[i].replace(/([0-9]+)/g, "<select id='$1' onchange='checkAnswers();'></select>");
		t += "</div>";
		document.getElementById("form").innerHTML += t;

	}
	questions.forEach(populateDropdown);
}

function makeSelectElementGreen(value) {
	console.log(value);
	value.class = 'rounded border-2 border-green-600 shadow-md';
}

function isAnswerCorrect(value, index) {
		return (document.getElementById(index).value == value.correctAnswer);
}

function checkAnswers() {
 //todo check each form separately, make the correct ones green; proceed to success state if all 3 correct

	if (questions.every(isAnswerCorrect) || tmp==1) {
		console.log("correct!")
		//document.getElementById("notes").class = "rounded-lg border-4 border-green-600 shadow-lg";
		document.getElementById("form").class = "answerform-correct" ;
		//document.getElementsByTagName("select").forEach(makeSelectElementGreen);
		
	}
}

function start() {
	 detectMob();
	 populateForm();
	 	tmp=0;
}



