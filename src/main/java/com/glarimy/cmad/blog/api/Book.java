package com.glarimy.cmad.blog.api;

import java.util.List;

import org.mongodb.morphia.annotations.*;

@Entity
public class Book {
	@Id
	private int isbn;
	private String title;
	
	private Publisher publisher;

	private List<Author> authors;
	
	public Book() {

	}
	public Book(int isbn, String title) {
		super();
		this.isbn = isbn;
		this.title = title;
	}
	public Book(int isbn, String title, Publisher publisher, List<Author> authors) {
		super();
		this.isbn = isbn;
		this.title = title;
		this.publisher = publisher;
		this.authors = authors;
	}

	public int getIsbn() {
		return isbn;
	}

	public void setIsbn(int isbn) {
		this.isbn = isbn;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Publisher getPublisher() {
		return publisher;
	}

	public void setPublisher(Publisher publisher) {
		this.publisher = publisher;
	}

	public List<Author> getAuthors() {
		return authors;
	}

	public void setAuthors(List<Author> authors) {
		this.authors = authors;
	}
	
	
}
