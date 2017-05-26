$(document).ready(function() {
	$("#addUserLink").click(function(e) {
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

	//Login Button(after submitting username and paswd) Handler
	$("#loginBtn").click(function() {
		//Ideally do validation here and then land on home page
		$("#addUserForm").hide();
		$("#addUserLink").hide();
		$("#loginForm").hide();
		$("#login").hide();
		$("#Signup").hide();
		$("#homePageMenu").show();
		$("#UpdateAccount").show();
		$("#AddBlog").show();
		$("#Logout").show();
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

});


/*
$(document).ready(function() {
	$("#addLink").click(function(e) {
		$("#addForm").show();
	});
	$("#addBtn").click(function() {
		$("#addForm").hide();
		var isbn = $("#isbn").val();
		var title = $("#title").val();
		var book = {
			"isbn" : isbn,
			"title" : title
		};
		$.ajax({
			url : 'rest/library/book',
			type : 'post',
			dataType : 'json',
			contentType: "application/json; charset=utf-8",
			success : function(data) {
				$("#addResult").show();
			},
			data : JSON.stringify(book)
		});
	});

});

 */