// Created July 29, 2017 17:00
// Author: Chris Jalallian
// Revisions:
// Wins, losses, create variable for player has chosen and waiting for opponent. if
//both chosen then display results and play animation/so and so wins.

// Initialize Firebase
var config = {
	apiKey: "AIzaSyAXyx-DEaqecadD4OV6576voVgNFjyO-us",
	authDomain: "rock-paper-scissors-357f2.firebaseapp.com",
	databaseURL: "https://rock-paper-scissors-357f2.firebaseio.com",
	projectId: "rock-paper-scissors-357f2",
	// storageBucket: "rock-paper-scissors-357f2.appspot.com",
	// messagingSenderId: "863882614549"
};
firebase.initializeApp(config);

var database = firebase.database();

var playerName = "";
var playerChoice = "";
var playerLosses = 0;
var playerWins = "";
var playerChat = "";

$("#submit-input").on("click", function() {
	event.preventDefault();
	playerName = $("#name-input").val().trim();


	database.ref("players/").push( {
		player: playerName
	});
	$("img").on("click", function() {
 	// console.log(this);
 	var playerChoice = $(this).attr("data-value");

	database.ref("players/").push({
 		choice: playerChoice
	});
});

});

// database.ref().on("child_added", function(snapshot) {
// 	var snapshotValue = snapshot.val();
// })




