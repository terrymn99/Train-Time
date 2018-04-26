$(document).ready(function () {


    //Firebase code
    var config = {
        apiKey: "AIzaSyCr433ULPenCrGGr4fERws_6MM_TvJ5uLY",
        authDomain: "train-schedule-363b9.firebaseapp.com",
        databaseURL: "https://train-schedule-363b9.firebaseio.com",
        projectId: "train-schedule-363b9",
        storageBucket: "train-schedule-363b9.appspot.com",
        messagingSenderId: "1077284610302"
    };
    firebase.initializeApp(config);

    //creating variables
    var trainName = "";
    var destination = "";
    var firstTrainTime = "";
    var frequency = "";
    var nextArrival = "";
    var minutesAway = "";
    var database = firebase.database();

    //Creating variables storing user's input
    $("#submit-button").on("click", function () {
        trainName = $("#input-train").val().trim();
        destination = $("#input-destination").val().trim();
        firstTrainTime = $("#input-firstTrain").val().trim();
        frequency = $("#input-frequency").val().trim();

        //Setting filenames in database
        firebase.database().ref().set({
            trainName: trainName,
            destination: destination,
            firstTrainTime: firstTrainTime,
            frequency: frequency
        })
    })
    
})