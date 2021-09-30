var readlineSync= require('readline-sync');
var userName = readlineSync.question('what is your name? ');
console.log('Hi!'+ userName);
;
var userResponse= readlineSync.question("Do you want to play this game 'yes' or 'no' ")
if (userResponse === 'yes')
{
console.log('Let us begin');

}
else
{
  console.log('shut up and play😅');
}


var score=0;
function play(question, answer)
{
var userAnswer = readlineSync.question(question);
if (userAnswer === answer)
{
  console.log('Hurray!, you are correct. ')
  score= score+1;

}
else
{
  console.log('Oops, you are wrong.');
  score=score+0;
}
console.log('your current score is: '+ score )
console.log('-------------------')
}

  play('1.how many seasons does friends show have','ten');
  play('2.how many times did ross get divorced','three');
  play('3.what is chandler bing middle name','muriel');
  play('4.joey played Dr.Drake ramoray on which soap opera show','days of our lives');
  play('5.monica categories her towels into how many categories','eleven');
  play('6.What is phoebe sister name','ursula')

  
console.log('Wohoo!, your final score is: '+score)
console.log('-------------------')
console.log('Incase if you missed anything, here the answers for above questions:')
var list = ['1.ten','2.three','3.muriel','4.days of our lives','5.eleven','6.ursula'];
for( var i=0; i<6;i++)
console.log(list[i])
console.log('-------------------')
console.log('checkout high scores')
var highScores =[
  {
  name: "mohit",
  score:6,
},
{
  name: "nandini",
  score:4,
}]
console.log(highScores)
