//JavaScript
function quiz() {
    var score = 0; 
     var totalQuestions = 3;
   alert("Welcome to my trivia game!");
   alert("Make sure you answer all the questions.");
   
    var q1 = prompt("What is the capital of china");       
   if(q1 == 'Beijing') {
       score = score+1;  
        alert("Correct"); 

   } else {
        alert("Incorrect"); 

   }
   
     var q2 = prompt("Which is the largest Continent") ;     
   if(q2 == 'asia'    ) {
       score = score+1;  
        alert("Correct"); 

   } else {
        alert("Incorrect"); 

   }
  
     var q3 = prompt("Wh is the president of India");      
   if(q3 == 'george washington') {
        score = score +1; 
        alert("Correct"); 

   } else {
        alert("Incorrect"); 

   }

    alert("You got " + score + " questions out of " + totalQuestions + " correct.");
}