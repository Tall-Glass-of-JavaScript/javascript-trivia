var viewModel = function () {
  var self = this;
  self.index = ko.observable(0);
  self.questions = ko.observableArray([{
      qNumber: 1,
      question: 'What is JavaScript?',
      answers: [
        'JavaScript is a programming/scripting language that allows the user to manipulate web',
        'JavaScript is a coffee project for teaching a foreign language',
        'JavaScript is a new technological achievement that is being researched by NASA',
        'JavaScript is a form of music practiced by the ancients of history.'
      ],
      correctAnswer: 'JavaScript is a programming/scripting language that allows the user to manipulate web',
    },
    {
      qNumber: 2,
      question: 'What are functions?',
      answers: [
        'A block of JavaScript code that is defined once but may be executed, or invoked, any number of times.',
        'A block of JavaScript code that is mentioned in passing via secret meetings',
        'A block of JavaScript code that is used to create disruptions in the system',
        'A block of JavaScript code that is known as “the coffee break”'
      ],
      correctAnswer: 'A block of JavaScript code that is defined once but may be executed, or invoked, any number of times.'
    },
    {
      qNumber: 3,
      question: 'True or False: Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations?',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'True'
    },
    {
      qNumber: 4,
      question: 'Select an example of an array',
      answers: [
        'function array(design) { return design*design};',
        'var array = 1;',
        'var array = ‘array’;',
        'var array = [1, 2, 3];'
      ],
      correctAnswer: 'var array = [1, 2, 3];'
    },
    {
      qNumber: 5,
      question: 'A variable can be made up of…',
      answers: [
        'Strings and headsets',
        'Numbers and keys',
        'Strings and Numbers',
        'Keys and Headsets'
      ],
      correctAnswer: 'Strings and Numbers'
    },
    {
      qNumber: 6,
      question: 'True or False: JavaScript code can be implemented into html using the <script> tag',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'True'
    },
    {
      qNumber: 7,
      question: 'Which of the following is an object?',
      answers: [
        'var controller = “steel”',
        'var controller = {material: “steel”}',
        'var controller = 5',
        'function controller(steel, rubber) {return steel + rubber};'
      ],
      correctAnswer: 'function controller(steel, rubber) {return steel + rubber};'
    },
    {
      qNumber: 8,
      question: 'What is a comment in relation to JavaScript?',
      answers: [
        'Text that isn’t part of the code but can be used to explain sections of the program',
        'Text that isn’t part of the code but can be used to improve readability',
        'Text that isn’t part of the code but can be used to test alternative code',
        'All of the above'
      ],
      correctAnswer: 'All of the above'
    },
    {
      qNumber: 9,
      question: ' True or False: Any collection of strings can be used as a variable name',
      answers: [
        'True',
        'False'
      ],
      correctAnswer: 'False'
    },
    {
      qNumber: 10,
      question: 'Select an example of comment syntax in relation to a JavaScript program ONLY',
      answers: [
        '<!- -Insert Comment Here - - > ',
        '// Insert Comment Here',
        '/* Insert Comment Here ! - - >',
        '* Insert Comment Here *'
      ],
      correctAnswer: '// Insert Comment Here'
    },
  ]);

  self.currentQuestion = ko.observable(self.questions()[0]);
  self.userAnswers = ko.observableArray();
  self.score = ko.observable(true);
  let didAnswer = false;

  //iterates to next question 
  self.next = function () {
    //go to next question if user answered current question
    if (didAnswer === true) {
      self.index(self.index() + 1);
      self.currentQuestion(self.questions()[self.index()]);
      console.log('You answered the question');
      didAnswer = false;
      //if user did not answer question, send alert box asking to confirm moving on 
    } else {
      moveOnAlert();
    };
  };

  //Go to previous question
  self.prev = function () {
    self.index(self.index() - 1);
    self.currentQuestion(self.questions()[self.index()]);
  };

  //save selected user answer, fired when answer is clicked in UI
  self.selected = function (userSelection) {
    //user selection
    this.userSelection = userSelection;
    didAnswer = true;
    console.log(userSelection);

    //if user selection matches the correct answer push to userAnswers array 
    if (userSelection === self.currentQuestion().correctAnswer) {
      self.userAnswers.push(userSelection);
    }
    console.log(self.userAnswers().length)
    console.log(self.userAnswers())
    // return self.userAnswers();
  };

  //alert created if user tries to move on without answering a question
  function moveOnAlert() {
    if (confirm('You have not answered this question, are you sure you would like to go to the next question?')) {
      didAnswer = true;
      // currentQuestion = self.index(self.index() + 1)
      console.log(self.index());
    } else {
      didAnswer = false;
      console.log(didAnswer);
    }
  };

  //finish quiz
  self.finishQuiz = function () {
    //calculate score
    calcScore = self.userAnswers().length / self.questions().length * 100;
    //grade score
    if (calcScore >= 80) {
      self.score(calcScore + '% You are a JavaScript expert');
      alert(self.score());
    }
    if (calcScore >= 60) {
      self.score(calcScore + '% You are a novice in JavaScript');
      alert(self.score());
    } else {
      self.score(calcScore + '% You are a beginner');
      alert(self.score());
    };
  };

  //resets the quiz, empties answers array and changes index and current question to zero index
  self.reset = function () {
    self.currentQuestion(self.questions()[0]);
    self.index(0);
    self.userAnswers([]);

    console.log(self.currentQuestion())
    console.log(self.index());
    console.log(self.userAnswers())
  };
};

ko.applyBindings(new viewModel());