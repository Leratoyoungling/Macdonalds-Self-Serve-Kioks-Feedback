feedback_form = function(){
	
	var docs = document.getElementById("img");
        docs.setAttribute("src", "https://media.giphy.com/media/l3q2FnW3yZRJVZH2g/giphy.gif");
	
	valid = true;

        if ( document.feedback_form.name.value == "" &&  document.feedback_form.email.value == "")
        {
                document.write ( "Please fill in the 'Your Name' box." );
                valid = false;
        }

        return valid;
	
}

 function results() {
	 
 
 
 var name = document.getElementById('name').value;
 var email = document.getElementById('email').value;
 
 if (document.getElementById('poll1').checked) {
  poll = document.getElementById('poll1').value;
 } else if (document.getElementById('poll2').checked) {
  poll = document.getElementById('poll2').value;
 } else {
   poll = document.getElementById('poll3').value;
 }
 
 var comments = document.getElementById('comments').value;
	 
 
  document.write("<h1>Thank You!</h1>".fontcolor('red'));
  document.write("<p>You have successfully submitted the feedback form.</p>".fontcolor('red'));
 
  document.write("<h3>Here is your data:</h3>");
 
 document.write(name + "<br/>");
 document.write(email + "<br/>");
 document.write(poll + "<br/>");
 document.write(comments + "<br/>");
 
  }




