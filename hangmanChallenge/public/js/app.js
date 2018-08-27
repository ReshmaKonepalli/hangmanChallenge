var app = angular.module('app', []);
app.controller("hangmanGameController", ['$scope','$timeout', function ($scope, $timeout) {

    var words= ["review","validate","mavrck","coding","game","testimony","alumini","northeastern"];
    $scope.incorrectLettersChosen=[];
    $scope.correctLettersChosen=[];
    var selectedWord='';
    $scope.guesses=10;
    $scope.displayWord='';
    $scope.incorrectGuesses = 0;
    $scope.input = {
        letter: ''
    };

    var selectRandomWord = function() {
        var index = Math.round(Math.random()*words.length);
        console.log(words[index]);
        if(index > 7){
            index = index - 1;
        } else if (index < 0){
            index = index + 1;
        }
        return words[index];
    }
    var newGame = function() {
        $scope.incorrectLettersChosen = [];
        $scope.correctLettersChosen=[];
        $scope.guesses=10;
        $scope.displayWord="";
        $scope.incorrectGuesses=0;
        selectedWord=selectRandomWord();
        var tempDisplayWord='';
        for(var i=0;i<selectedWord.length;i++) {
            tempDisplayWord+='-';
        }
        $scope.displayWord=tempDisplayWord;
        // Random word selection.
    }
    $scope.letterChosen = function() {
        // Check if $scope.input.letter is a single letter and an alphabet and not an already chosen letter.
        // Check if its correct.
        for(var i=0;i<$scope.correctLettersChosen.length;i++) {
            if($scope.correctLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
                $scope.input.letter="";
                return;
            }
        }

        for(var i=0;i<$scope.incorrectLettersChosen.length;i++) {
            if($scope.incorrectLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) {
                $scope.input.letter="";
                return;
            }
        }
        var correct=false;
        for(var i=0;i<selectedWord.length;i++) {
            if(selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase()) {
                $scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.displayWord.slice(i+1);
                correct=true;
            }
        }
        if(correct && $scope.input.letter!= "") {
            $scope.correctLettersChosen.push($scope.input.letter.toUpperCase());
        } else if($scope.input.letter == ""){
            alert("Enter any Letter field can not be empty");

        }else if($scope.input.letter != ""){
            $scope.guesses--;
            $scope.incorrectLettersChosen.push($scope.input.letter.toUpperCase());
            $scope.incorrectGuesses++;
        }
        $scope.input.letter="";

        if($scope.guesses==0) {
            $timeout(function() {
                alert("Sorry! You've Lost the game. Start a new game to continue playing.");
                newGame();
            },500);
        }
        if($scope.displayWord.indexOf("-")==-1) {
            $timeout(function() {
                alert("You Won");
                newGame();
            },500);
        }
    }

    $scope.open = function(){
        alert("INSTRUCTIONS:" +"\n1. The player is represented with an empty field for each letter in the word." +
            "\n2.When the player guesses a letter correctly, each field that represents that letter is filled with the letter."
            + "\n3.When the player guesses a letter incorrectly, a piece of a gallows with a hanging man is drawn." +
            "\n4.After 10 incorrect guesses, the game is over and the player losses." +
            "\n5.If all fields are filled with their letter before 10 incorrect guesses, the player wins the game.");
    }

    $scope.restart = function(){
        newGame();
    }

    newGame();
}]);


