package com.glarimy.cmad.blog.api;

public interface Blog {
	public void add(Book book) throws InvalidBookException, DuplicateBookException, LibraryException;

	public Book find(int isbn) throws BookNotFoundException, LibraryException;
	
	public void addUser(User user);
}
