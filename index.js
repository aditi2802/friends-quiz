var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
console.log(chalk.black.bgMagentaBright.bold.underline("<-The one where you test your FRIENDS knowledge->\n"));
var userName = readlineSync.question(chalk.yellowBright("Hey! May i have your name ? : "));
console.log(chalk.blue("Welcome "+userName+" !\n"));
console.log(chalk.redBright("The quiz consists of 5 questions.\nEach question has four options.\nType one correct answer.\nThe questions will be as complicated as Ross and Rachel's relationship.So,let's start :)\n"));

function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.yellow("You are right!"));
    score++;
  }
  else{
    console.log(chalk.blackBright("Better luck next time!"));
    console.log(chalk.red("Correct answer: "+answer));
    score--;
  }
  console.log(chalk.green.bgBlack("Current Score: "+score));
  console.log("------------------------------------------------");
}

var questionOne={
  question: "Q.1 What job did Chandler do ?\na.Data processor  b.Stand-up comedian c.Journalist d.Social media influencer\n",
  answer: "a"
}

var questionTwo={
  question: "Q.2 Which friend dates Paolo ?\na.Joey b.Rachel c.Ross c.Monica\n",
  answer: "b"
}

var questionThree={
  question: "Q.3 What is Phoebe's alias ?\na.Ragina Phalange b.Regina Richter c.Smelly cat d.Crap bag\n",
  answer: "a"
}

var questionFour={
  question: "Q.4 What is the Joey Special ?\na.Meatball sub b.Two pizzas c.Turkey d.Milk\n",
  answer: "b"
}

var questionFive={
  question: "Q.5 In how many categories Monica categorizes her towels ?\na.9 b.10 c.11 d.12\n",
  answer: "c"
}

var questions=[questionOne,questionTwo, questionThree, questionFour, questionFive];
for(var i=0;i<questions.length;i++){
  play(questions[i].question, questions[i].answer);
}

console.log(chalk.white.bgRed.underline("Yay! you scored: "+score+"\n"));
console.log(chalk.bold.underline.bgBlack("<- THANKS FOR PLAYING ->"));
