package com.glarimy.cmad.blog.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.api.User;
import com.glarimy.cmad.blog.service.GlarimyBlog;

@Path("/blogapp")
public class BlogController {
	private static Blog library = new GlarimyBlog();

	@POST
	@Path("/book")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(Book book) {
		library.add(book);
		return Response.ok().build();
	}
	
	@POST
	@Path("/user")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addUser(User user) {
		library.addUser(user);
		return Response.ok().build();
		//return "Ranadheer";
	}

	@GET
	@Path("/book/{isbn}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response find(@PathParam("isbn") int isbn) {
		Book book = library.find(isbn);
		return Response.ok().entity(book).build();
	}
}