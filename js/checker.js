window.onload = function() {
  displayComments();
};

var names = ["Ben", "Joel", "Judy", "Anne"];// Array of names with its default values
var comments = ["Very good", "Best of luck", "I like it", "Never give up"];// Array of comments with its default values related to the names array

// Function to display all comments 
function displayComments() {
  var resultsHTML = "";

  for (var i = 0; i < names.length; i++) {
    resultsHTML += names[i] + " : <br>_____" + comments[i] + "<hr>";
  }
  
  var allCommentsElement = document.getElementById("allComments");
  if (allCommentsElement) {
    allCommentsElement.innerHTML = resultsHTML;
  } else {
    console.error("Element with ID 'allComments' not found.");
  }
}

// Adding fullName and comment written by users
function addData() {
  var name = document.getElementById("fullName").value;
  var comment = document.getElementById("comment").value;

  if (name !== "" && comment !== "") {
    names.push(name);
    comments.push(comment);
    displayComments(); // Call displayComments after adding data
  } else {
    window.alert("You must enter a fullname and a comment");
  }
}
