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
      new questionViewModel("Question 1", ["Answer 1", "Answer 2", "Answer 3", "Answer 4"], 1, "Answer 4"),
      new questionViewModel("Question 2", ["Answer 5", "Answer 6", "Answer 7", "Answer 8"], 2, "Answer 6"),
      new questionViewModel("Question 3", ["Answer 9", "Answer 10", "Answer 11", "Answer 12"], 3, "Answer 9"),
      new questionViewModel("Question 4", ["Answer 13", "Answer 14", "Answer 15", "Answer 16"], 4, "Answer 15"),
      new questionViewModel("Question 5", ["Answer 17", "Answer 18", "Answer 19", "Answer 20"], 5, "Answer 19"),
      new questionViewModel("Question 6", ["Answer 21", "Answer 22", "Answer 23", "Answer 24"], 6, "Answer 24"),
      new questionViewModel("Question 7", ["Answer 25", "Answer 26", "Answer 27", "Answer 28"], 7, "Answer 26"),
      new questionViewModel("Question 8", ["Answer 29", "Answer 30", "Answer 31", "Answer 32"], 8, "Answer 31"),
      new questionViewModel("Question 9", ["Answer 33", "Answer 34", "Answer 35", "Answer 36"], 9, "Answer 33"),
      new questionViewModel("Question 10", ["Answer 37", "Answer 38", "Answer 39", "Answer 40"], 10, "Answer 37")
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