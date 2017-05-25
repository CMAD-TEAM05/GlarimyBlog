package com.glarimy.cmad.blog.api;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Publisher {
	@Id
	private String name;
	private long phoneNumber;

	public Publisher() {

	}

	public Publisher(String name, long phoneNumber) {
		super();
		this.name = name;
		this.phoneNumber = phoneNumber;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

}
