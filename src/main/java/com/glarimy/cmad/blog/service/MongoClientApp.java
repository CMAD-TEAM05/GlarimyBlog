package com.glarimy.cmad.blog.service;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.data.MongoBlogDAO;
import com.mongodb.MongoClient;


public class MongoClientApp {

	public static void main(String[] args) {
		/*
		MongoClient mongoClient = new MongoClient("127.0.0.1:27017");
		Morphia morphia = new Morphia();
		String databaseName = "glarimy";
		Datastore datastore = morphia.createDatastore(mongoClient, databaseName);

		MongoBlogDAO dao = new MongoBlogDAO(Book.class, datastore);

		//dao.save(new Book(2341, "mongo2"));
		dao.save(new Book(997, "test1"));
		dao.save(new Book(123, "test2"));
		System.out.println("hello world");
		Book BookObj = dao.get(997);
		System.out.println(BookObj);
		//System.out.println(BookObj.getTitle());
		List<Book> res = dao.findByTitle("test");
		for(int i=0;i<res.size();i++){
			BookObj = res.get(i);
			System.out.println(BookObj);
		}
		//System.out.println(dao.findByTitle("test9"));
		//System.out.println(dao.find().asList());
		System.out.println("Last line");
		*/
	}
}
