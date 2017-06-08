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
import com.glarimy.cmad.blog.api.BlogInterface;
import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.api.User;
import com.glarimy.cmad.blog.service.GlarimyBlog;

@Path("/blogapp")
public class BlogController {
	private static BlogInterface team05Blog = new GlarimyBlog();

	@POST
	@Path("/user")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addUser(User user) {
		team05Blog.addUser(user);
		return Response.ok().build();
	}
	
	@GET
	@Path("/user/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findUser(@PathParam("name") String name) {
		User userInfo = team05Blog.findUser(name);
		return Response.ok().entity(userInfo).build();
	}
	
	@POST
	@Path("/blog")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addBlog(Blog blog) {
		team05Blog.addBlog(blog);
		return Response.ok().build();
	}
	
	@POST
	@Path("/book")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response add(Book book) {
		team05Blog.add(book);
		return Response.ok().build();
	}
	
	@GET
	@Path("/book/{isbn}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response find(@PathParam("isbn") int isbn) {
		Book book = team05Blog.find(isbn);
		return Response.ok().entity(book).build();
	}
	@GET
	@Path("/hello")
	@Produces(MediaType.APPLICATION_JSON)
	public Response returnHello() {
		
		String output = "Hello world";
		return Response.status(200).entity(output).build();
	}
}