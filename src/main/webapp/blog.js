var bloglist = [];
var this_user = "";
//comment 

$(document).ready(function() {

	$("#SignUpLink").click(function(){
		$("#landingPageCentralArea").hide();
		$("#LoginAndSignUp").show();
		$('#loginbox').hide(); 
		$('#signupbox').show();
		$("#LandingPageBlogSec").hide();
	});

	$("#LoginLink").click(function(){
		$("#landingPageCentralArea").hide();
		$("#LandingPageBlogSec").hide();
		$("#LoginAndSignUp").show();
		$('#signupbox').hide();
		$('#loginbox').show(); 		
	});

	$("#btn-log-out").click(function(){
		console.log("Loggin out, showing home page");
		$('#landingPage').show();
		$('#HomePage').hide();
		$('#SignUpSuccess').hide();
		$('#SignUpFailure').hide();
		$("#landingPageCentralArea").show();
		$("#LandingPageBlogSec").hide();
		$("#LoginAndSignUp").hide();
		$('#signupbox').hide();
		$('#loginbox').hide(); 		
	});



	//Login Button(after submitting username and paswd) Handler
	$("#btn-signup").click(function() {
		//Ideally do validation here and then land on home page
		var uname = $("#signup-uname").val();
		var userEmail = $("#signup-email").val();
		//var Name = $("#signup-name").val();  //vijgc
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

		/*if(Name==""){
			display_alert("name is a Mandatory field. Please fill the Name field");
			//display_alert("User name");
			//$("#addUserForm").show();
			return;
		}*/

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
				//"name" : Name, //vijgc
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
				"username" : uname,
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
				this_user = uname;
				console.log("Calling getBlogsByUser()");
				getBlogsByUser(uname);
			},	    
			error: function(jqXHR,status, err){
				$("#loginAlert").show();
				console.log("Login failed");
			}
		});
	});



	//Submit blog button 
	$("#btn-submit-blog").click(function() {
		//Ideally do validation here and then land on home page
		var title = $("#blogtitle").val();
		var  content = $("#blogContent").val();
		var username = this_user;
		var postedDate =  new Date();	
		var blog = {
				"userName" : username,
				"title" : title,
				"content" : content,
				"postedDate" : postedDate
		};
		$.ajax({
			url : 'rest/blogapp/blog/',
			type : 'post',
			dataType : 'text',
			contentType: "application/json; charset=utf-8",
			data : JSON.stringify(blog),
			success : function(data, status, jqXHR){
				alert("Blog added successfully");
				displayHomepage(this_user);
				console.log("Adding a blog: success");
				getBlogsByUser(this_user);
			},	    
			error: function(jqXHR,status, err){
				alert("Blog addition failed");
				displayHomepage(this_user);
				console.log("Blog addition failed");
			}
		});
	});


	//Button to Open Blog form
	$("#btn-open-blog-form").click(function() {
		//Hide Blogs and show blog form 
		console.log("hide blog area and show form");
		$("#BlogArea").hide();
		$("#AddBlogForm").show();

	});	


	//Search blogs. Get blogs by title
	$("#btn-search-blog").click(function() {

		var keyword = $("#blog-keyword").val();
		console.log("Searching for keyword" + keyword);
		console.log("Calling getBlogsByTitle()");
		getBlogsByTitle(keyword,false);
	});

	//Search blogs. Get blogs by title for landing page
	$("#landing-btn-search-blog").click(function() {

		var keyword = $("#landing-blog-keyword").val();
		console.log("Searching for keyword" + keyword);
		console.log("Calling getBlogsByTitle()");
		getBlogsByTitle(keyword,true);
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
	$("#AddBlogForm").hide();
	$("#landingPageCentralArea").hide();
	$("#LoginAndSignUp").hide();
	$('#loginbox').hide(); 
	$('#signupbox').hide();
	$("#landingPage").hide();
	$("#HomePage").show();
}


function getBlogsByTitle(keyword,isLandingPage){

	console.log("Make a AJAX call to get all blogs by title: "+keyword);
	$.ajax({
		url : 'rest/blogapp/blog/search/' + keyword,
		type : 'GET',
		contentType: "application/json; charset=utf-8",
		success : function(data,status,jqXHR) {
			console.log("Successful AJAX call to get all blogs by title");
			if(isLandingPage){
				console.log("updating landing page");
				displayLandingPageBlogs(data);	
			}else {
				console.log("Updating home page post login");
				displayHomePageBlogs(data);
			}
		},
		error: function(jqXHR,status){
			console.log("Oops!! there was a problem!");	
		}
	});
}

function getBlogsByUser(uname){
	//make a AJAX call to get all blogs and update 
	var username = uname;
	console.log("Make a AJAX call to get all blogs by user: "+username);

	$.ajax({
		url : 'rest/blogapp/blog/' + username,
		type : 'GET',
		contentType: "application/json; charset=utf-8",
		success : function(data,status,jqXHR) {
			console.log("Successful AJAX call to get all blogs by User");
			displayHomePageBlogs(data);
		},
		error: function(jqXHR,status){
			console.log("Oops!! there was a problem!");	
		}
	});
}

function displayHomePageBlogs(data){
	$("#AddBlogForm").hide();
	$("#BlogArea").show();
	console.log(JSON.stringify(data));
	console.log("Printing each entry : ");
	var json = data;
	var singleblog = "";
	var comment_id = ""; //this is unique per blog, used for display purpose only
	singleblog+= '<h4><small>RECENT POSTS</small></h4>';

	if(data==null){
		singleblog+='<h4>No blogs to display!!</h4>';
	}else {
		var len = json.length;
		for (i=0; i < len; i++) {    
			console.log(json[i].userName);
			console.log(json[i]);
			//var postedDate = new Date(json[i].postedDate);
			postedDate = formatAMPM(json[i].postedDate);
			comment_id = json[i].uniqueID + "c";
			console.log(postedDate);

			singleblog+= '<div id="' + json[i].uniqueID + '">'; 
			singleblog+= "<hr><h2>" + json[i].title + "</h2>";
			singleblog+= '<h5><span class="glyphicon glyphicon-time"></span> Post by ' + json[i].userName + "," + postedDate + "</h5>"; 
			singleblog+= '<h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5>';
			singleblog+= "<br><p>" + json[i].content + "</p><br><br>";
			//singleblog+= '<button type="submit" class="btn btn-primary" onclick=\'getComments(\"3fd59593f5b74b60\")\'>Show Comments test</button></div>';
			singleblog+= '<button type="submit" class="btn btn-primary" onclick=\'getComments(\"' + json[i].uniqueID + '\")\'>Show Comments</button>';
			singleblog+= '<div id="' + comment_id + '"> </div>'; //will be used for displaying comments and comment form
			singleblog+= '</div>'; 
			singleblog+= '<br><br>';
			console.log(singleblog);
		}
	}
	document.getElementById('BlogArea').innerHTML = singleblog;
}

function getAllBlogs(){
	//make a AJAX call to get all blogs and update 
	//var username = uname;
	console.log("Make a AJAX call to get all blogs : ");

	$.ajax({
		url : 'rest/blogapp/blog/all',
		type : 'GET',
		contentType: "application/json; charset=utf-8",
		success : function(data,status,jqXHR) {
			console.log("Successful AJAX call to get all blogs");
			displayLandingPageBlogs(data);
		},
		error: function(jqXHR,status){
			console.log("Oops!! there was a problem getting all blogs!");	
		}
	});
}

function displayLandingPageBlogs(data){
	$("#LoginAndSignUp").hide();
	$("#landingPageCentralArea").hide();
	$("#LandingPageBlogSec").show();

	console.log(JSON.stringify(data));
	console.log("Printing each entry : ");
	var json = data;
	
	var singleblog = "";
	singleblog+= '<h4><small>RECENT POSTS</small></h4>';

	if(data==null){
		singleblog+='<h4>No blogs to display!!</h4>';
	}else{
		var len = json.length;
		for (i=0; i < len; i++) {    
			console.log(json[i].userName);
			console.log(json[i]);
			//var postedDate = new Date(json[i].postedDate);
			postedDate = formatAMPM(json[i].postedDate);
			console.log(postedDate);
			singleblog+= '<br><br>';
			singleblog+= "<hr><h2>" + json[i].title + "</h2>";
			singleblog+= '<h5><span class="glyphicon glyphicon-time"></span> Post by ' + json[i].userName + "," + postedDate + "</h5>"; 
			singleblog+= '<h5><span class="label label-danger">Food</span> <span class="label label-primary">Ipsum</span></h5>';
			singleblog+= "<br><p>" + json[i].content + "</p><br><br>";
			console.log(singleblog);
		}
	}
	document.getElementById('LandingPageBlogArea').innerHTML = singleblog;

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

function getComments(BlogUniqueID){
	console.log("Dumping bid :" + BlogUniqueID);
	//var data ="";
	//displayComments(data,BlogUniqueID)

	//make a AJAX call to get the comment and update a particular blog
	$.ajax({
		url : 'rest/blogapp/blog/'+ BlogUniqueID + '/comment',
		type : 'GET',
		contentType: "application/json; charset=utf-8",
		success : function(data,status,jqXHR) {
			console.log("Successful AJAX call to get comments for a particular blog");
			displayComments(data,BlogUniqueID);
		},
		error: function(jqXHR,status){
			console.log("Oops!! there was a problem getting comments");	
		}
	});


	//console.log(document.getElementById(uniqueID).innerHTML);
}

function displayComments(data,BlogUniqueID){
	var postedDate;
	console.log("Comments received :" + data);

	var commentID = BlogUniqueID+"c";
	var comments = "";
	comments += '<h4>Leave a Comment:</h4>';
	comments += '<form role="form">';
	comments+= '<div class="form-group">';
	comments+= '<textarea class="form-control" rows="3" required> </textarea>';
	comments+= '</div>';
	comments+= '<button type="submit" class="btn btn-success" onclick=\'addComment(\"' + BlogUniqueID + '\")\'' + '>Submit</button>';
	comments+= '</form><br><br>';

	if (data==null){
		comments+= '<h4>No Comments to display</h4>';
	}else {
		var len = data.length;
		comments += '<p><span class="badge">' + len + '</span>Comments:</p><br>';
		for(i=0;i<len;i++){
			//Add comments html
			postedDate = formatAMPM(data[i].postedDate);
			comments += '<div class="row"><div class="col-sm-2 text-center"><img src="profile.png" class="img-circle" height="65" width="65" alt="Avatar">';
			comments += '</div>';
			comments += '<div class="col-sm-10"> <h5>' + data[i].userName + '<small> &nbsp' + postedDate + '</small></h5>';
			comments += '<p>' + data[i].content	+ '</p><br></div>';
		}
	}
	console.log("Comments html : " + comments);
	document.getElementById(commentID).innerHTML = comments;
}

function addComment(BlogUniqueID){
	var commentID = BlogUniqueID+"c";
	var elem = document.getElementById(commentID).getElementsByTagName("TEXTAREA");
	console.log("Print the comment content:");
	//console.log( elem );
	//console.log(elem[0]);
	console.log(elem[0].value);
	var content = elem[0].value;
	var postedDate = new Date();
	//console.log(elem[0].innerHTML);  displays nothing 
	//Write a comment to a blog and update the comment section(call getComments again ?)
	var comment = {
			"userName" : this_user,
			"uniqueID" : BlogUniqueID,
			"content" : content,
			"postedDate" : postedDate
	};

	$.ajax({
		url : 'rest/blogapp/comment' ,
		type : 'post',
		contentType: "application/json; charset=utf-8",
		data : JSON.stringify(comment), 
		success : function(data,status,jqXHR) {
			console.log("Successful AJAX call to add comment");
			getComments(BlogUniqueID);
		},
		error: function(jqXHR,status){
			console.log("Oops!! there was a problem in adding comment!");	
		}
	});

}
