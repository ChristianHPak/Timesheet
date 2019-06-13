var firebaseConfig = {
    apiKey: "AIzaSyCyK0oFDFd6-PgFnZzaqruP2XsClXc0jv4",
    authDomain: "bootcamp-c712f.firebaseapp.com",
    databaseURL: "https://bootcamp-c712f.firebaseio.com",
    projectId: "bootcamp-c712f",
    storageBucket: "bootcamp-c712f.appspot.com",
    messagingSenderId: "1079610811747",
    appId: "1:1079610811747:web:e11b57157afd5d4a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref().on("child_added", function (ChildSnapshot) {
   var newRow = $("<div class='row'>")
    $(".card-body").html(newRow);
    newRow.addClass("pt-5")
   
    $("#EmployeeList").append("<div class='row'><span class='col-md-2>' " + ChildSnapshot.val().EmployeeName + "<span class='col-md-2>" + ChildSnapshot.val().EmployeeRole + "<span class='col-md-2>" + ChildSnapshot.val().EmployeeStartDate + "<span class='col-md-2>" + ChildSnapshot.val().EmployeeMonthlyRate)
});

$("#Employee-Submit").on("click", function (event) {
    event.preventDefault();

    var EmployeeName = $("#Employee-Name").val().trim();
    var EmployeeRole = $("#Employee-Role").val().trim();
    var EmployeeStartDate = $("#Employee-StartDate").val().trim();
    var EmployeeMonthlyRate = parseInt($("#Employee-MonthlyRate").val().trim());

    // var MonthsWorked = 
    // var TotalBilled = 

    //saves info in database
    database.ref().push({
        EmployeeName: EmployeeName,
        EmployeeRole: EmployeeRole,
        EmployeeStartDate: EmployeeMonthlyRate,
        EmployeeStartDate: EmployeeStartDate
      });

    $("input").val("")
});