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
	$("#register").click(function() {
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
	url : 'rest/blogapp/user',
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
	
	
	$("#SubmitBlogBtn").click(function() {
	$("#addUserForm").hide();
	$("#addUserLink").hide();
	var blogName = $("#Blognamename").val();
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
	url : 'rest/blogapp/blog',
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