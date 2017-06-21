package com.glarimy.cmad.blog.rest;

import java.security.Key;
import java.util.Date;
import java.util.List;
import javax.crypto.spec.SecretKeySpec;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.BlogInterface;
import com.glarimy.cmad.blog.api.User;
import com.glarimy.cmad.blog.jwtfilter.*;
import com.glarimy.cmad.blog.service.GlarimyBlog;
import io.jsonwebtoken.*;

import static javax.ws.rs.core.HttpHeaders.AUTHORIZATION;
import static javax.ws.rs.core.Response.Status.UNAUTHORIZED;

//ashdkjdsa

@Path("/blogapp")
public class BlogController {
	private static BlogInterface team05Blog = new GlarimyBlog();
	@POST
	@Path("/user")
	@Produces({ MediaType.TEXT_PLAIN })
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addUser(User user) {
		team05Blog.addUser(user);
		String response = "success";
		return Response.ok(response).build();
	}
	
	
	@GET
	@Path("/user/{name}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response findUser(@PathParam("name") String name) {
		User userInfo = team05Blog.findUser(name);
		return Response.ok().entity(userInfo).build();
	}	
	
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response authenticateUser(@PathParam("login") String login,
            @PathParam("password") String password) {
			try {
				// Authenticate the user using the credentials quering db
				//authenticate(login, password);

				// Issue a token for the user
				String token = issueToken(login);

				// Return the token on the response
				return Response.ok().header(AUTHORIZATION, "Bearer " + token).build();

			} catch (Exception e) {
				return Response.status(UNAUTHORIZED).build();
			}
	}
	
	private String issueToken(String login) {
		String keyString = "simplekey";
        Key key = new SecretKeySpec(keyString.getBytes(), 0, keyString.getBytes().length, "DES");
        String jwtToken = Jwts.builder()
                .setSubject(login)
                .setIssuer("cmad")
                .setIssuedAt(new Date())
                .signWith(SignatureAlgorithm.HS512, key)
                .compact();
        return jwtToken;
    }
	
	@POST
	@Path("/blog")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addBlog(Blog blog) {
		team05Blog.addBlog(blog);
		return Response.ok().build();
	}
	
	@GET
	@Path("/blog/{keyword}")
	@JWTTokenNeeded
	@Produces(MediaType.APPLICATION_JSON)
	public Response getBlogsByTitle(@PathParam("keyword") String keyword) {
		List<Blog> blogs = team05Blog.findBlogsByTitle(keyword);
		//Response.status(200).entity(result).build();
		ObjectMapper mapper = new ObjectMapper();
		String result = null;
		try {
			 result = mapper.writeValueAsString(blogs);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(result);
		return Response.ok().entity(result).build();
	}
	
	@GET
	@Path("/blogs/{uname}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getBlogsByUser(@PathParam("uname") String uname) {
		List<Blog> blogs = team05Blog.findBlogsByUser(uname);
		//Response.status(200).entity(result).build();
		ObjectMapper mapper = new ObjectMapper();
		String result = null;
		try {
			 result = mapper.writeValueAsString(blogs);
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(result);
		return Response.ok().entity(result).build();
	}
	/*private static BlogInterface team05Blog = new GlarimyBlog();

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
	*/
	@GET
	@Path("/hello")
	@Produces(MediaType.APPLICATION_JSON)
	public Response returnHello() {
		
		String output = "Hello world Vijay";
		
		return Response.status(200).entity(output).build();
	}
}