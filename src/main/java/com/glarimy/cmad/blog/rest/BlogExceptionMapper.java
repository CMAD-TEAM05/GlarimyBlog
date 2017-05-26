package com.glarimy.cmad.blog.rest;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

import com.glarimy.cmad.blog.api.BlogNotFoundException;
import com.glarimy.cmad.blog.api.BookNotFoundException;
import com.glarimy.cmad.blog.api.InvalidBlogException;
import com.glarimy.cmad.blog.api.InvalidUserException;
import com.glarimy.cmad.blog.api.PermissionDeniedException;
import com.glarimy.cmad.blog.api.UserNotFoundException;

@Provider
public class BlogExceptionMapper implements ExceptionMapper<Throwable> {

	@Override
	public Response toResponse(Throwable t) {
		
		t.printStackTrace();
		
		if (t instanceof BlogNotFoundException || t instanceof UserNotFoundException)
			return Response.status(Response.Status.NO_CONTENT).build();
		
		else if(t instanceof InvalidBlogException || t instanceof InvalidUserException)
			return Response.status(Response.Status.BAD_REQUEST).build();
		
		else if (t instanceof PermissionDeniedException)
            return Response.status(Response.Status.UNAUTHORIZED).build();
		
		else 
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
	}
}
