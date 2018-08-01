$(document).ready(function () {

    $("#submit-button").hide();
    $("#results").hide();
    //set variable for answer selections for end of game

    var AnswersCorrect = 0;
    var AnswersIncorrect = 0;
    // var Total = 10;
    
    var Unanswered = 0

    //hide questions until user hits start...
    //when user hits the start button, start countdown and display questions...


    $("#start-button").click(function () {
        $("#start-button").hide();
        $("#questions").show();
        $("#submit-button").show();


        countdown();
        decrement();


        var number = 60;
        var intervalID;



        function countdown() {
            clearInterval(intervalID);
            intervalID = setInterval(decrement, 1000);
        }

        function decrement() {
            number--;
            $("#clock").html("<h2> Time Remaining: " + number + "</h2>")

            if (number === 0) {
                stop();

                $("#questions").hide();
                $("#clock").hide();
                $("#submit-button").hide();

                var btns = $("input:radio")

                for (i = 0; i < btns.length; i++) {
                    // console.log($(btns[0]).is(':checked'))

                    if ($(btns[i]).is(':checked')) {
                        console.log("Yes " + btns[i].value);


                        if (btns[i].value === "true") {

                            AnswersCorrect++;
                            console.log("Yes");
                        }

                        else {
                            AnswersIncorrect++;
                            console.log("No");
                        }

                        var sum = AnswersCorrect + AnswersIncorrect;
                        Unanswered = 10 - sum;
                    }

                }


                    $("#results").show();

                    $("#correct-result").append(AnswersCorrect);
                    $("#incorrect-result").append(AnswersIncorrect);
                    $("#unanswered-result").append(Unanswered);

                    // Unasnwered = (10 - abs(AnswersCorrect + AnswersIncorrect));
                    


                

                

                function stop() {
                    clearInterval(intervalID);
                }

            }

            //     var difference = 10 - abs(AnswersCorrect + AnswersIncorrect);
            
            // if (number === 0 & difference > 0) {
            //     Unanswered++;
            // }



            // while (AnswersCorrect + AnswersIncorrect < 10) {
            //             Unanswered = 10 - abs(AnswersCorrect + AnswersIncorrect);

            //         }

        };





        $("#submit-button").click(function () {
            stop();
            $("#questions").hide();
            $("#clock").hide();
            $("#submit-button").hide();

            var btns = $("input:radio")

            for (i = 0; i < btns.length; i++) {
                // console.log($(btns[0]).is(':checked'))

                if ($(btns[i]).is(':checked')) {
                    console.log("Yes " + btns[i].value);

                    // Answers.prototype.contains = function(check){
                    //     return this.indexOf(btn[i]) > -1;
                    // };

                    // function check(){
                    //     return btn[i].value;
                    // }

                    // check();


                    if (btns[i].value === "true") {

                        AnswersCorrect++;
                        console.log("Yes");
                    }

                    else {
                        AnswersIncorrect++;
                        console.log("No");
                    }


                    var sum = AnswersCorrect + AnswersIncorrect;
                        Unanswered = 10 - sum;

                }

            }

            // while (AnswersCorrect + AnswersIncorrect < 10) {
            //     Unanswered = 10 - abs(AnswersCorrect + AnswersIncorrect);



            // }

            $("#results").show();

            $("#correct-result").append(AnswersCorrect);
            $("#incorrect-result").append(AnswersIncorrect);
            $("#unanswered-result").append(Unanswered);






        });

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
