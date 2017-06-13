package com.glarimy.cmad.blog.data;

import java.util.List;

import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.api.User;

public interface BlogDAO {
	public void create(Book book);
	public Book read(int isbn);
	public void addUser(User user);
	public User findUser(String name);
	public void addBlog(Blog blog);
	public List<Blog> getBlogsByUser(String uname);
	public List<Blog> searchBlogsBytitle(String keyword);
}
