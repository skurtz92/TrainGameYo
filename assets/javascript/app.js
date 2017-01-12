  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdw1EOdx1WtuhIfqfa9pd7rFFpclhcqjU",
    authDomain: "trains-cc50a.firebaseapp.com",
    databaseURL: "https://trains-cc50a.firebaseio.com",
    storageBucket: "",
    
  };
  firebase.initializeApp(config);

var database = firebase.database();
database.ref().set({
  trains:'traingameyo'
});
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
  database.ref('trains').update ({
    'name': name,
    'destination': destination,
    'time' : time,
    'frequency' : freq,
  });
});