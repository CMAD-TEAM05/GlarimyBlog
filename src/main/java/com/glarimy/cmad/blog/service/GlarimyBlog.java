package com.glarimy.cmad.blog.service;

import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.api.BookNotFoundException;
import com.glarimy.cmad.blog.api.DuplicateBookException;
import com.glarimy.cmad.blog.api.InvalidBookException;
import com.glarimy.cmad.blog.api.LibraryException;
import com.glarimy.cmad.blog.api.User;
import com.glarimy.cmad.blog.data.JPABlogDAO;
import com.glarimy.cmad.blog.data.BlogDAO;

public class GlarimyBlog implements Blog {
	private BlogDAO dao = new JPABlogDAO();

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

	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		dao.addUser(user);
		return;
	}

}
