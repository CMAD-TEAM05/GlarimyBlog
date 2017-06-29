package com.glarimy.cmad.blog.api;

import java.util.Date;
import org.mongodb.morphia.annotations.*;

//commentdsadsd
@Entity
public class Comment {
	@Id
	private String cid;
	private String UniqueID; //this is for blogid
	private String content;
	private Date postedDate;
	private String userName;
	
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
	public String getUniqueID() {
		return UniqueID;
	}
	public void setUniqueID(String uniqueID) {
		UniqueID = uniqueID;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
}
