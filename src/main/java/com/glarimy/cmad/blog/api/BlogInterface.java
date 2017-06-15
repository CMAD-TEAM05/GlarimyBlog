package com.glarimy.cmad.blog.api;

import java.util.List;

public interface BlogInterface {
	public void add(Book book) throws InvalidBookException, DuplicateBookException, LibraryException;

	public Book find(int isbn) throws BookNotFoundException, LibraryException;
	
	public void addUser(User user);

	public User findUser(String name);

	public void addBlog(Blog blog);

	public List<Blog> findBlogsByTitle(String keyword);

	public List<Blog> findBlogsByUser(String uname);
}
