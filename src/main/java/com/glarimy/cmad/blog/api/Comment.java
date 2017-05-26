package com.glarimy.cmad.blog.api;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Comment {
	@Id
	String content;
	Date postedDate;
	
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
	
}
