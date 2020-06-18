var viewModel = function () {
  var self = this;
  self.index = ko.observable(0);
  self.userAnswers = ko.observableArray();
  self.score = ko.observable(true);
  let didAnswer = false;
  let selection = []; //placeholder for user selection

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

  self.next = function () {
    //go to next question if user answered current question
    if (didAnswer === true) {
      self.index(self.index() + 1);
      self.currentQuestion(self.questions()[self.index()]);
      didAnswer = false;
      let userSelected = selection[selection.length - 1];

      //check if users selection matches correct answer and is not a duplicate before pushing to userAnswer array
      if ((self.questions()[self.index() - 1].correctAnswer === userSelected) && (self.userAnswers.indexOf(userSelected) === -1)) {
        //push last answer from user selection to userAnswers array
        self.userAnswers.push(userSelected)
      };
      console.log(self.userAnswers());
    } else {
      alert('Please answer the question before moving on')
    };
  };

  //Go to previous question
  self.prev = function () {
    self.index(self.index() - 1);
    self.currentQuestion(self.questions()[self.index()]);
    didAnswer = true;
  };

  //save selected user answer, fired when answer is clicked in UI
  self.selected = function (userSelection) {
    //user selection
    this.userSelection = userSelection;
    didAnswer = true;
    selection.push(userSelection);
    console.log(selection);
  };

  //function to see if user input matches correct answers that will be called from next() and finishQuiz()
  // self.correct = function () {
  //   let correct;
  //   let userAnswer = selection[selection.length - 1]

  //   if (self.index() < (self.questions().length) - 1) {
  //     correct = self.questions()[self.index() - 1].correctAnswer;
  //   } else {
  //     correct = self.currentQuestion().correctAnswer;
  //   };
  //   if (correct === userAnswer) {
  //     self.userAnswers.push(userAnswer)
  //   };
  // };

  //finish quiz
  self.finishQuiz = function () {
    let userSelected = selection[selection.length - 1];
    //grade last question since next is disabled
    //check if users selection matches correct answer and is not a duplicate before pushing to userAnswer array
    if ((userSelected === self.currentQuestion().correctAnswer) && (self.userAnswers.indexOf(userSelected) === -1)) {
      self.userAnswers.push(selection[selection.length - 1])
    };
    console.log('last question');

    //calculate score
    calcScore = self.userAnswers().length / self.questions().length * 100;
    if (self.index() === 9) {
      console.log('test')
    };
    console.log(self.userAnswers());

    //grade score
    if (calcScore >= 80) {
      self.score(calcScore + '% You are a JavaScript expert');
      alert(self.score());
    } else if (calcScore < 60) {
      self.score(calcScore + '% You are a beginner');
      alert(self.score());
    } else if (calcScore < 80) {
      self.score(calcScore + '% You are a novice');
      alert(self.score());
    }
  };

  //resets the quiz, empties answers array and changes index and current question to zero index
  self.reset = function () {
    self.currentQuestion(self.questions()[0]);
    self.index(0);
    self.userAnswers([]);

    console.log(self.currentQuestion());
    console.log(self.index());
    console.log(self.userAnswers());
  };
};

ko.applyBindings(new viewModel());