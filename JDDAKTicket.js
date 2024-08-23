function data()
 {
   
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var issue = document.getElementById("issue").value;
    var issue = document.getElementById("issue").value;
    var desc = document.getElementById("desc").value;

 
    if (firstName.length > 20 || firstName.length < 3) {
        document.getElementById("fnameStatus").innerHTML = "";
       alert("First name must be greater than 3 characters and less than 20");
   
    } 
    if (lastName.length > 20 || lastName.length < 3) {
        document.getElementById("lnameStatus").innerHTML = "";
        alert("Last name must be greater than 3 characters and less than 20")
     
    }
    if (issue.length > 12) {
        document.getElementById("issueStatus").innerHTML = "";
        alert("Issue type must be less than 12 characters")
    }
    if (desc.length > 300 || desc.length < 5) {
        document.getElementById("descStatus").innerHTML = "";
       alert("Description must be longer than 5 characters and less than 300")
    }   
    else
    {
        alert("Ticket Submitted successfully");
        location.replace("HDNEWTicket.html");
    }
}
