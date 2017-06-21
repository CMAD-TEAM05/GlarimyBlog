$(document).ready(function() {
//sdsad
//dddd
	$("#SignUpLink").click(function(){
		$("#landingPageCentralArea").hide();
  		$("#LoginAndSignUp").show();
  		$('#loginbox').hide(); 
  		$('#signupbox').show();
	});

	$("#LoginLink").click(function(){
		$("#landingPageCentralArea").hide();
		$("#LoginAndSignUp").show();
		$('#signupbox').hide();
		$('#loginbox').show(); 		
	});



/*

	$("#addUserLink").click(function(e) {
		$("#LoginAndsignUp").show();
		$("#addUserForm").show();
	});

	//Sign Up button handler
	$("#Signup").click(function(){
		$("#login").hide();
		$("#Signup").hide();
		$("#addUserForm").show();
	});



	//Register(submit button) handler
	$("#addUserBtn").click(function() {
		$("#addUserForm").hide();
		$("#login").hide();
		$("#Signup").hide();
		var userName = $("#name").val();
		var userAge = $("#age").val();
		var userEmail = $("#email").val();
		var userPassword = $("#password").val();
		var userMobile = $("#mobile").val();
		if(userName==""){
			alert("UserName is a Mandatory field. Please fill the username field");
			$("#addUserForm").show();
			return;
		}
		if(userAge==""){
			alert("Please enter your age!");
			$("#addUserForm").show();
			return;
		}
	    var atpos = userEmail.indexOf("@");
	    var dotpos = userEmail.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	    	alert("Invalid email address");
	    	$("#addUserForm").show();
	    	return;
	    }
	    if(userPassword==""){
			alert("Please enter a valid password!");
			$("#addUserForm").show();
			return;
		}
	    if(userMobile==""){
			alert("Please enter your mobile number!");
			$("#addUserForm").show();
			return;
		}
	    $("#addUserResult").show();
		$("#login").show();
		$("#Signup").show();
		var user = {
				"name" : userName,
				"age" : userAge,
				"emailId" : userEmail,
				"password" : userPassword,
				"mobile" : userMobile
		};
		$.ajax({
			url : 'http://localhost:9999/cmad-rest/rest/blogapp/user',
			type : 'post',
			dataType : 'json',
			contentType: "application/json; charset=utf-8",
			success : function(data) {
				$("#addUserResult").show();
			},
			data : JSON.stringify(user)
		});
	});

	//login Handler 
	$("#login").click(function(){
		$("#login").hide();
		$("#Signup").hide();
		$("#loginForm").show();
	});
*/

	//Login Button(after submitting username and paswd) Handler
	$("#btn-signup").click(function() {
		//Ideally do validation here and then land on home page
		var uname = $("#signup-uname").val();
		var userEmail = $("#signup-email").val();
		var Name = $("#signup-name").val();
		var userAge = $("#signup-age").val();
		var userPassword = $("#signup-password").val();
		var userContact = $("#signup-contact").val();

		
		if(uname==""){
			display_alert("UserName is a Mandatory field. Please fill the username field");
			//display_alert("User name");
			//$("#addUserForm").show();
			return;
		}

	    var atpos = userEmail.indexOf("@");
	    var dotpos = userEmail.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
	    	display_alert("Invalid email address");
	    	$("#addUserForm").show();
	    	return;
	    }

		if(Name==""){
			display_alert("name is a Mandatory field. Please fill the Name field");
			//display_alert("User name");
			//$("#addUserForm").show();
			return;
		}

		if(userAge==""){
			display_alert("Please enter your age!");
			$("#addUserForm").show();
			return;
		}

	    if(userPassword==""){
			display_alert("Please enter a valid password!");
			$("#addUserForm").show();
			return;
		}
	    if(userContact==""){
			display_alert("Please enter your mobile number!");
			$("#addUserForm").show();
			return;
		}

		var user = {
				"name" : Name,
				"username" : uname,
				"age" : userAge,
				"email" : userEmail,
				"password" : userPassword,
				"mobile" : userContact
		};
		console.log("Make a AJAX call");
		$.ajax({
			url : 'rest/blogapp/user',
			type : 'POST',
			contentType: "application/json; charset=utf-8",
			success : function(data,status,jqXHR) {
				console.log("Successful AJAX call for sign up");
				$("#addUserResult").show();
				$("#SignUpSuccess").show();
			},
			data : JSON.stringify(user),
			error: function(jqXHR,status){
				
			}
		});


		/*
		//Send a ajax request to get all blogs by this user
		var username = $("#Username").val();
		$.ajax({
			url : 'rest/blogapp/blog/{username}',
			type : 'post',
			dataType : 'json',
			contentType: "application/json; charset=utf-8",
			success : function(data) {
				for (var i=0; i<data.length; i++) {
					var row = $('<tr><td>' + data[i].title+ '</td><td>' + data[i].content + '</td></tr>');
					$('#myBlogTable').append(row);
				}
			},	    
			error: function(jqXHR, textStatus, errorThrown){
				alert('Error: ' + textStatus + ' - ' + errorThrown);
			}
		});
		*/
		data : JSON.stringify(user)
	});
    


	//Login Button(after submitting username and paswd) Handler
	$("#btn-login").click(function() {
		//Ideally do validation here and then land on home page
		var uname = $("#login-username").val();
		var passwd = $("#login-password").val();
		if(validate(uname,passwd)){
				alert("Login successful" );
				console.log("Login successful");
				displayHomepage(uname);
		}else {
				$("#loginAlert").show();
				console.log("Login failed");
		}
		/*
		//Send a ajax request to get all blogs by this user
		var username = $("#Username").val();
		$.ajax({
			url : 'rest/blogapp/blog/{username}',
			type : 'post',
			dataType : 'json',
			contentType: "application/json; charset=utf-8",
			success : function(data) {
				for (var i=0; i<data.length; i++) {
					var row = $('<tr><td>' + data[i].title+ '</td><td>' + data[i].content + '</td></tr>');
					$('#myBlogTable').append(row);
				}
			},	    
			error: function(jqXHR, textStatus, errorThrown){
				alert('Error: ' + textStatus + ' - ' + errorThrown);
			}
		});
		*/
		data : JSON.stringify(user)
	});
    


    /*
	//Add Blog Button handler
	$("#addBlog").click(function(){
		$("#login").hide();
		$("#Signup").hide();
		$("#loginForm").hide();
		$("#addBlogForm").show();
	});
	
	//Add Blog Button handler
	$("#CancelBlogBtn").click(function(){
		$("#login").hide();
		$("#Signup").hide();
		$("#loginForm").hide();
		$("#addBlogForm").hide();
	});
	
	$("#updateProfile").click(function(){
		confirm("Functionlity not supported Yet!");
	});

	$("#logout").click(function(){
		$("#homePageMenu").hide();
		$("#UpdateAccount").hide();
		$("#AddBlog").hide();
		$("#Logout").hide();
		$("#loginForm").hide();
		$("#addBlogForm").hide();
		$("#login").show();
		$("#Signup").show();
	});
	


	$("#SubmitBlogBtn").click(function() {
		$("#addUserForm").hide();
		$("#addUserLink").hide();
		$("#addBlogForm").hide();
		var blogName = $("#BlogName").val();
		var blogContent = $("#BlogContent").val();
		var user = {
				"name" : "user1",
				"age" : "25",
				"emailId" : "userEmail",
				"password" : "userPassword",
				"mobile" : "userMobile"
		};
		var blog = {
				"title" : blogName,
				"content" : blogContent,
				"user" : user
		};
		$.ajax({
			url : 'http://localhost:9999/cmad-rest/rest/blogapp/blog',
			type : 'post',
			dataType : 'json',
			contentType: "application/json; charset=utf-8",
			success : function(data) {
				$("#submitBlogResult").show();
			},
			data : JSON.stringify(user)
		});
	});

*/
});
function displaySignUpAndLoginForm(){
	$("#LoginAndSignUp").show();
}

function validate(uname, passwd){
	if(uname=="abc" && passwd=="123"){
		return true;
	}else{
		return false;
	}
}

function display_alert(str){
	
	console.log("Display alter message"+str);
	document.getElementById("SignUpFailureMsg").innerHTML = str;
	$("#SignUpFailure").show();
}

function displayHomepage(username){
	console.log("Displaying home page now");
	$("#landingPageCentralArea").hide();
  	$("#LoginAndSignUp").hide();
  	$('#loginbox').hide(); 
  	$('#signupbox').hide();
	$("#landingPage").hide();
	$("#HomePage").show();
}