/*
 - rock paper scissors
 - rock paper scissors lizard spock
 */


$(function () {

    var choices = {
        0: {name: "Rock", class: "rock", defeats: {scissors: "crushes", lizard: "crushes"}},
        1: {name: "Paper", class: "paper", defeats: {rock: "covers", spock: "disproves"}},
        2: {name: "Scissors", class: "scissors", defeats: {paper: "cuts", lizard: "decapitates"}},
        3: {name: "Lizard", class: "lizard", defeats: {paper: "eats", spock: "poisons"}},
        4: {name: "Spock", class: "spock", defeats: {scissors: "smashes", rock: "vaporises"}}
    };

    var score_p1 = 0;
    var score_p2 = 0;

    $('#panel i').click(function () {

        var clickId = $(this).attr('id');
        var cmp = 0;
        for (var choice in choices) {
            if ($(this).hasClass(choices[choice].class)) {
                var player1 = choice;
                $('.p1 .hand').html('<i class="fa fa-hand-' + choices[choice].class + '-o" aria-hidden="true"></i>');
            }
            cmp++;
        }

        var player2 = Math.floor((Math.random() * cmp));
        $('.p2 .hand').html('<i class="fa fa-hand-' + choices[player2].class + '-o" aria-hidden="true"></i>');

        var player1Name = choices[player1].name;
        var player2Name = choices[player2].name;
        console.log(player1Name + ' VS ' + player2Name + '(' + player2 + ')');

        var resultBox = $('#result div');
        $('#result').show();

        var lose = false;
        for (var defeat in choices[player2].defeats) {
            if (choices[player1].class == defeat) {
                resultBox.html('You Lose ! <span>' + choices[player2].name + ' ' + choices[player2].defeats[defeat] + ' ' + choices[player1].name + '</span>');
                score_p2++;
                $('.s2 span').text(score_p2);
                lose = true;
                break;
            }
        }

        if (!lose) {
            if (player1 == player2) {
                resultBox.text('It\'s a draw');
            } else {
                resultBox.html('You WIN ! <span>' + choices[player1].name + ' ' + choices[player1].defeats[choices[player2].class] + ' ' + choices[player2].name + '</span>');
                score_p1++;
                $('.s1 span').text(score_p1);
            }
        }

    })

})



