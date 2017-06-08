package com.glarimy.cmad.blog.api;

import java.util.Date;
import java.util.List;
import org.mongodb.morphia.annotations.*;
@Entity
public class Blog {
	@Id
	private String title;
	private String content;
	private Date postedDate;
	private String userName;
	//@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private List<Comment> comments;
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getPostedDate() {
		return postedDate;
	}
	public void setPostedDate(Date postedDate) {
		this.postedDate = postedDate;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public List<Comment> getComments() {
		return comments;
	}
	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}
	
}
