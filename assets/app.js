
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdw1EOdx1WtuhIfqfa9pd7rFFpclhcqjU",
    authDomain: "trains-cc50a.firebaseapp.com",
    databaseURL: "https://trains-cc50a.firebaseio.com",
    storageBucket: "trains-cc50a.appspot.com",
    messagingSenderId: "628369238169"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
database.ref().set({
	trains: "sadasd"
});
// var firstTimeConverted = moment(firstTime,"hh:mm").subtract(1, "years");
// var currentTime = moment();
// var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
// var tRemainder = diffTime % tFrequency;
// var tMinutesTillTrain = tFrequency - tRemainder;
// var nextTrain = moment().add(tMinutesTillTrain, "minutes")
$("#submit").on("click", function() {
	let name = $("#trainName").val();
	let destination = $("#trainDestination").val();
	let time = $("#firstTime").val();
	let freq = $("#frequency").val();
	console.log(name)
	console.log(destination)
	console.log(time)
	console.log(freq)
	$('.table').append('<tr><td>' + name + '</td><td>' + destination + '</td><td>' + freq + '</td><td>' + time+ '</td></tr>');
	database.ref('Trains').update ({
		'name': name,
		'destination': destination,
		'time' : time,
		'frequency' : freq,
	});
});


/*var newTrainName;
var newTrainDestination;
var newTrainTime;
var newTrainFrequency;

$(document).ready(function() {

//button for ading trains
$("#addTrain").on("click", function() {

	//get user input
	newTrainName = $("#trainNameInput").val().trim();
	newTrainDestination = $("#destinationInput").val().trim();
	newTrainTime = $("#firstTrainInput").val().trim();
	newTrainFrequency = $("#frequencyInput").val().trim();

	//creat object to hold train data
	var newTrainListing = {
		name: newTrainName,
		dest: newTrainDestination,
		first: newTrainTime,
		freq: newTrainFrequency
	};

	//upload train data to firebase
	firebase.database().ref().push(newTrainListing);

	//clears text boxes
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#firstTrainInput").val("");
	$("#frequencyInput").val("");

//end of add train function
});

//add employee to firebase database and a row in html
firebase.database().ref().on("child_added", function(childSnapshot) {

	console.log(childSnapshot.val());

	//store snapshot values in variables
	newTrainName = childSnapshot.val().name;
	newTrainDestination = childSnapshot.val().dest;
	newTrainTime = childSnapshot.val().first;
	newTrainFrequency = childSnapshot.val().freq;

	console.log(newTrainName);
	console.log(newTrainDestination);
	console.log(newTrainTime);
	console.log(newTrainFrequency);

	//time of first train
	var newTrainTimeDisplay = moment(newTrainTime, "hh:mm").subtract(1, "years");
	console.log(newTrainTimeDisplay);

	//difference between now and the train's first trip time
	var difference = moment().diff(moment(newTrainTimeDisplay), "minutes");
	console.log("difference: " + difference);

	//remainder is time left between trains
	var trainRemainder = difference % newTrainFrequency;
	console.log("remainder: " + trainRemainder);

	//minutes until train
	var minutesLeft = newTrainFrequency - trainRemainder;
	console.log("minutes left: " + minutesLeft);

	var nextTrain = moment().add(minutesLeft, "minutes");
	console.log ("arrival: " + moment(nextTrain).format("hh:mm"));

	//add data to train schedule
	$("#train-schedule > tbody").append("<tr class='active'><td>" + newTrainName + "</td><td>" + newTrainDestination + "</td><td>" + newTrainFrequency + "</td><td>" + moment(nextTrain).format('hh:mm') + "</td><td>" + minutesLeft + "</td></tr>");

//end of add to database and html table function
});

//end of document ready function
});