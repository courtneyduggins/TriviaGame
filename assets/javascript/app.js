$(document).ready(function(){

    $("#submit-button").hide();
    $("#results").hide();
    //set variable for answer selections for end of game

    var AnswersCorrect = 0;
    var AnswersIncorrect = 0;
    var Unanswered = 0;

     //hide questions until user hits start...
    //when user hits the start button, start countdown and display questions...


    $("#start-button").click(function(){
        $("#start-button").hide();
        $("#questions").show();
        $("#submit-button").show();

        
        countdown();
        decrement();
        
        
        var number = 90;
        var intervalID;

        

        function countdown(){
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);
        }

        function decrement(){
            number--;
            $("#clock").html("<h2> Time Remaining: " + number + "</h2>")
        
        if(number === 0){
            stop();
        }

        function stop(){
            clearInterval(intervalID);
        }

        // var showQuestions = function {

        // }
    }    

   

// setTimeout(twoMinutes, 1000 * 90);


      //user must select only one answer to each question      
            

        
    });
   
 var Answers = ["Green", "Oreo", "Alisha May Emily", "'Morning is here!'", "Megan", "Jessica Rabbit", "Liam and Devon", "Emma and Daniel", "Buick Lesabre", "72"]   

 
 

 $("input:radio").each(function(){

    if ($("input[name='question1'][value='true']").prop("checked")){
        AnswersCorrect++;
        console.log(AnswersCorrect);
    }
    
    // var selected = document.getElementById("q1").checked;
    //     console.log(selected);   
    // var radioValue = $("input[type='radio'].radioButtons:checked").val();
    // console.log(radioValue);

    
    
    // for (var i = 0; i < Answers.length; i++){
        // var Answers = Answers.toString();

    //     if(radioValue.ischecked() && value==="true"){
        

    //         AnswersCorrect++;
    //         console.log(AnswersCorrect);        
    //     }
    

    //     else {

    //     AnswersIncorrect++;
        
    // }
// }

    
 });



 $("#submit-button").click(function(){
    $("#questions").hide();
    $("#clock").hide();
    $("#submit-button").hide();
    $("#results").show();
 });
 

 




    //check questions one to see if right answer has been selected
    //


    //if userSelection matches Answer, increase correctAnswers by 1...
    //if userSelection does not match Answer, increase incorrectAnswers by 1...
    //if user does not make a selestion, increase unansweredQuestions by 1...


    //if time is still remaining and user hits submit OR time expires, display correctAnswers, 
    //incorrectAnswers, and any unansweredQuestions...



    //restart game...
    

});