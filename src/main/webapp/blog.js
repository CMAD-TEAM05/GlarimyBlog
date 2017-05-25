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
