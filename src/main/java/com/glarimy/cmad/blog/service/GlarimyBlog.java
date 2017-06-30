package com.glarimy.cmad.blog.service;

import java.util.List;

import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.BlogInterface;
import com.glarimy.cmad.blog.api.BlogNotFoundException;
import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.api.BookNotFoundException;
import com.glarimy.cmad.blog.api.Comment;
import com.glarimy.cmad.blog.api.DuplicateBookException;
import com.glarimy.cmad.blog.api.InvalidBlogException;
import com.glarimy.cmad.blog.api.InvalidBookException;
import com.glarimy.cmad.blog.api.InvalidUserException;
import com.glarimy.cmad.blog.api.LibraryException;
import com.glarimy.cmad.blog.api.User;
import com.glarimy.cmad.blog.api.UserNotFoundException;
import com.glarimy.cmad.blog.data.JPABlogDAO;
import com.glarimy.cmad.blog.data.MongoBlogDAO;
import com.glarimy.cmad.blog.data.BlogDAO;

public class GlarimyBlog implements BlogInterface {
	//private BlogDAO dao = new JPABlogDAO();
	private BlogDAO dao = new MongoBlogDAO();
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
	@Override
	public List<Blog> findBlogsByTitle(String keyword)  {
		List<Blog> blogs = dao.searchBlogsBytitle(keyword);
		if (blogs == null)
			throw new BlogNotFoundException();
		return blogs;
	}
	@Override
	public List<Blog> findBlogsByUser(String uname)  {
		List<Blog> blogs = dao.getBlogsByUser(uname);
		if (blogs == null)
			throw new BlogNotFoundException();
		return blogs;
	}
	@Override
	public List<Blog> findAllBlogs()  {
		List<Blog> blogs = dao.getAllBlogs();
		if (blogs == null)
			throw new BlogNotFoundException();
		return blogs;
	}
	
	
	@Override
	public boolean IsAuthenticateUser(String userName, String password) {
		// TODO Auto-generated method stub
		if(dao.isUserValid(userName, password)){
			return true;
		}else{
			return false;
		}
	}

	@Override
	public List<Comment> findCommentsByBlogID(String blogid) {
		// TODO Auto-generated method stub
		List<Comment> comments = dao.getCommentsByBlogID(blogid);
		if (comments == null)
			throw new BlogNotFoundException();
		return comments;
		
	}

	@Override
	public void addComment(Comment comment) {
		// TODO Auto-generated method stub
		if (comment == null)
			throw new InvalidBlogException();
		dao.addComment(comment);
	}
}
