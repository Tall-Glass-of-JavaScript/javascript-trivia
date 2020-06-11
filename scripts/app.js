/*
console.log("testing");

var myViewModel = {
  personName: 'June',
  personAge: 123
};
*/
var viewModel = function() {
  var self = this;
  self.index = ko.observable(0);
  self.questions = [
    //array of questions setup as question, [answers], question number, correct answer
      new questionViewModel("What is JavaScript?", ["A.	JavaScript is a programming/scripting language that allows the user to manipulate the web", "B.	JavaScript is a coffee project for teaching a foreign language", "C.	JavaScript is a new technological achievement that is being researched by NASA", "D.	JavaScript is a form of music practiced by the ancients of history"], 1, "Answer 4"),
      new questionViewModel("What are functions?", ["A.	A block of JavaScript code that is defined once but may be executed, or invoked, any number of times.", "B.	A block of JavaScript code that is mentioned in passing via secret meetings", "C.	A block of JavaScript code that is used to create disruptions in the system", "D.	A block of JavaScript code that is known as “the coffee break”"], 2, "Answer 6"),
      new questionViewModel("True or False: Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations?", ["A.	True", "B.	False", "C. Both", "D. Neither"], 3, "Answer 9"),
      new questionViewModel("Select an example of an array", ["A. function array(design) \n \n { return design*design; }", "B.	var array = 1", "C.	var array = ‘array’", "D.	var array = [1, 2, 3]"], 4, "Answer 15"),
      new questionViewModel("A variable can be made up of…", ["Strings and headsets", "B.	Numbers and keys", "C.	Strings and Numbers", "D.	Keys and Headsets"], 5, "Answer 19"),
      new questionViewModel("True or False: JavaScript code can be implemented into html using the 'script' tag.", ["A.	True", "B.	False", "C. Both", "D. Neither"], 6, "Answer 24"),
      new questionViewModel("Which of the following is an object?", ["A.	var controller = “steel”", "B.	var controller = {material: “steel”}", "C.	var controller = 5", "D.	function controller(steel, rubber) {return steel + rubber}"], 7, "Answer 26"),
      new questionViewModel("8.	What is a comment in relation to JavaScript?", ["A.	Text that isn’t part of the code but can be used to explain sections of the program", "B.	Text that isn’t part of the code but can be used to improve readability", "C.	Text that isn’t part of the code but can be used to test alternative code", "D.	All of the above"], 8, "Answer 31"),
      new questionViewModel("9.	Select an example of comment syntax in relation to a JavaScript program ONLY", ["A.	'< ! - - Insert Comment Here - - >'", "B.	// Insert Comment Here", "C.	/* Insert Comment Here ! - - >", "D.	* Insert Comment Here *"], 9, "Answer 33"),
      new questionViewModel("True or False: Any collection of strings can be used as a variable name", ["A.	True", "B.	False", "C. Both", "D. Neither"], 10, "Answer 38")
      ];
      //next and previous buttons to iterate through the array of questions
  self.currentQuestion = ko.observable(self.questions[0]);
      self.next = function() {
          self.index(self.index() + 1);
          self.currentQuestion(self.questions[self.index()]);
      }
      self.prev = function() {
          self.index(self.index() - 1);
          self.currentQuestion(self.questions[self.index()]);
      }

  return self;
};

var answerViewModel = function(answer) {
  this.answer = answer;
  this.selected = ko.observable(false);
  return this;
};

var questionViewModel = function(question, answers, number, correct) {
  var self = this;
  self.question = question;
  self.answers = [];
  self.number = number;
  self.correct = correct; 
  for (var n = 0; n < answers.length; n++) {
      self.answers.push(new answerViewModel(answers[n]));
  }
  self.select = function(answer) {
      self.answers.forEach(function(a) { a.selected(false); });
      answer.selected(true);
  }
  return self;
};

ko.applyBindings(new viewModel());