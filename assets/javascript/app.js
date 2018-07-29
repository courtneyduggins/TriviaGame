$(document).ready(function(){

     //hide questions until user hits start...
    //when user hits the start button, start countdown and display questions...


    $("#start-button").click(function(){
        $("#start-button").hide();

        $("#questions").show();
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
    }    

// setTimeout(twoMinutes, 1000 * 90);


      //user must select only one answer to each question      
            
        
    
        
    });
   


    


    //if userSelection matches Answer, increase correctAnswers by 1...
    //if userSelection does not match Answer, increase incorrectAnswers by 1...
    //if user does not make a selestion, increase unansweredQuestions by 1...


    //if time is still remaining and user hits submit OR time expires, display correctAnswers, 
    //incorrectAnswers, and any unansweredQuestions...



    //restart game...
    

});