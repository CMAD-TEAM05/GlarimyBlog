package com.glarimy.cmad.blog.service;

import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.BlogInterface;
import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.api.BookNotFoundException;
import com.glarimy.cmad.blog.api.DuplicateBookException;
import com.glarimy.cmad.blog.api.InvalidBlogException;
import com.glarimy.cmad.blog.api.InvalidBookException;
import com.glarimy.cmad.blog.api.InvalidUserException;
import com.glarimy.cmad.blog.api.LibraryException;
import com.glarimy.cmad.blog.api.User;
import com.glarimy.cmad.blog.api.UserNotFoundException;
import com.glarimy.cmad.blog.data.JPABlogDAO;
import com.glarimy.cmad.blog.data.BlogDAO;

public class GlarimyBlog implements BlogInterface {
	private BlogDAO dao = new JPABlogDAO();

	@Override
	public void addUser(User user) throws InvalidUserException{
		if (user == null)
			throw new InvalidUserException();
		dao.addUser(user);
	}

	@Override
	public User findUser(String name) throws UserNotFoundException{
		User userInfo = dao.findUser(name);
		if (userInfo == null)
			throw new UserNotFoundException();
		return userInfo;
	}
	
	@Override
	public void addBlog(Blog blog) {
		if (blog == null)
			throw new InvalidBlogException();
		dao.addBlog(blog);
	}

	@Override
	public void add(Book book) throws InvalidBookException, DuplicateBookException, LibraryException {
		if (book == null)
			throw new InvalidBookException();
		if (dao.read(book.getIsbn()) != null)
			throw new DuplicateBookException();
		dao.create(book);
	}

	@Override
	public Book find(int isbn) throws BookNotFoundException, LibraryException {
		Book book = dao.read(isbn);
		if (book == null)
			throw new BookNotFoundException();
		return book;
	}
}
