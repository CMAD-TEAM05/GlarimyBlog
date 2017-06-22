var bloglist = [];

$(document).ready(function() {

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
	});

	//Login Button(after submitting username and paswd) Handler
	$("#btn-login").click(function() {
		//Ideally do validation here and then land on home page
		var uname = $("#login-username").val();
		var passwd = $("#login-password").val();
		var user = {
			"name" : uname,
			"password" : passwd
		};
		$.ajax({
			url : 'rest/blogapp/login/',
			type : 'post',
			dataType : 'text',
			contentType: "application/json; charset=utf-8",
			data : JSON.stringify(user),
			success : function(data, status, jqXHR){
				displayHomepage(uname);
				console.log("Calling getBlogsByUser()");
				getBlogsByUser(uname);
			},	    
			error: function(jqXHR,status, err){
				$("#loginAlert").show();
				console.log("Login failed");
			}
		});
	});
	
	//Search blogs. Get blogs by title
	$("#btn-search-blog").click(function() {
		//Ideally do validation here and then land on home page
		var keyword = $("#blog-keyword").val();
		console.log("Searching for keyword" + keyword);
		console.log("Calling getBlogsByTitle()");
		getBlogsByTitle(keyword);
	});


});

function displaySignUpAndLoginForm(){
	$("#LoginAndSignUp").show();
}

function display_alert(str){

	console.log("Display alter message"+str);
	document.getElementById("SignUpFailureMsg").innerHTML = str;
	$("#SignUpFailure").show();
}

function displayHomepage(username){
	var str = "Displaying home page now for user : "+username;
	console.log(str);
	$("#landingPageCentralArea").hide();
	$("#LoginAndSignUp").hide();
	$('#loginbox').hide(); 
	$('#signupbox').hide();
	$("#landingPage").hide();
	$("#HomePage").show();
}


function getBlogsByTitle(keyword){
	
	console.log("Make a AJAX call to get all blogs by title: "+keyword);
	$.ajax({
		url : 'rest/blogapp/blog/search' + keyword,
		type : 'GET',
		contentType: "application/json; charset=utf-8",
		success : function(data,status,jqXHR) {
			console.log("Successful AJAX call to get all blogs by title");
			displayBlogs(data);
		},
		error: function(jqXHR,status){
			console.log("Oops!! there was a problem!");	
		}
	});
}

function getBlogsByUser(uname){
	//make a AJAX call to get all blogs and update 
	var username = "random2";
	console.log("Make a AJAX call to get all blogs by user: "+username);

	$.ajax({
		url : 'rest/blogapp/blogs/' + username,
		type : 'GET',
		contentType: "application/json; charset=utf-8",
		success : function(data,status,jqXHR) {
			console.log("Successful AJAX call to get all blogs by User");
			displayBlogs(data);
		},
		error: function(jqXHR,status){
			console.log("Oops!! there was a problem!");	
		}
	});
}

function displayBlogs(data){
	console.log(JSON.stringify(data));
	console.log("Printing each entry : ");
	var json = data;
	var len = json.length;
	var singleblog = "";



	for (i=0; i < len; i++) {    
		console.log(json[i].userName);
		console.log(json[i]);
		//var postedDate = new Date(json[i].postedDate);
		postedDate = formatAMPM(json[i].postedDate);
		console.log(postedDate);
		singleblog+= '<h4><small>RECENT POSTS</small></h4>';
		singleblog+= "<hr><h2>" + json[i].title + "</h2>";
		singleblog+= '<h5><span class="glyphicon glyphicon-time"></span> Post by ' + json[i].userName + "," + postedDate + "</h5>"; 
		singleblog+= '<h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5>';
		singleblog+= "<br><p>" + json[i].content + "</p><br><br>";
		console.log(singleblog);
	}
	document.getElementById('BlogArea').innerHTML = singleblog;
}


function formatAMPM(a) {
	var d = new Date(a),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}
