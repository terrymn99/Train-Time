$(document).ready(function () {


    //Initializing firebase code
    var config = {
        apiKey: "AIzaSyCr433ULPenCrGGr4fERws_6MM_TvJ5uLY",
        authDomain: "train-schedule-363b9.firebaseapp.com",
        databaseURL: "https://train-schedule-363b9.firebaseio.com",
        projectId: "train-schedule-363b9",
        storageBucket: "train-schedule-363b9.appspot.com",
        messagingSenderId: "1077284610302"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    //creating variables
    var trainName = "";
    var trainTime = "";
    var destination = "";
    var firstTrainTime = "";
    var frequency = "";
    var nextArrival = "";
    var minutesAway = "";
    var currentTime = "";
    var adjustedTrainTime = "";
    var trainTimeDifference = "";

    //Event listener for when submit button is clicked
    $("#submit-button").on("click", function (event) {
        event.preventDefault();

        //Assigning user input to variables
        trainName = $("#input-train").val().trim();
        destination = $("#input-destination").val().trim();
        firstTrainTime = $("#input-firstTrain").val().trim();
        frequency = $("#input-frequency").val().trim();
        minutesAway = $("#input-minutesAway").val().trim();

        //Create object with temp variables containing train data
        var newTrain = {
            trainName: trainName,
            destination: destination,
            firstTrainTime: firstTrainTime,
            frequency: frequency,
            minutesAway: minutesAway
        };

        //Pushing data to firebase database
        database.ref().push(newTrain);

        //Clearing the input  boxes
        $("#input-train").val("");
        $("#input-destination").val("");
        $("#input-firstTrain").val("");
        $("#input-frequency").val("");
        $("#input-minutesAway").val("");

    })
    //Creating event listener for when child is added to database
    database.ref().on("child_added", function (childSnapshot) {

        var tableRow = $("<tr>");

        var trainNameDisplay = $("<td>");
        trainNameDisplay.text(childSnapshot.val().trainName);
        trainNameDisplay.appendTo(tableRow);

        var destinationDisplay = $("<td>");
        destinationDisplay.text(childSnapshot.val().destination);
        tableRow.append(destinationDisplay);

        var firstTrainTimeDisplay = $("<td>");
        firstTrainTimeDisplay.text(childSnapshot.val().firstTrainTime);
        tableRow.append(firstTrainTimeDisplay);

        var frequencyDisplay = $("<td>");
        frequencyDisplay.text(childSnapshot.val().frequency);
        tableRow.append(frequencyDisplay);

        var minutesAwayDisplay = $("<td>");
        minutesAwayDisplay.text(childSnapshot.val().minutesAway);
        tableRow.append(minutesAwayDisplay);

        $("#tbody").append(tableRow);
    }, function (errorObject) {
        // Error message
        console.log("Errors handled: " + errorObject.code);
    });
})

