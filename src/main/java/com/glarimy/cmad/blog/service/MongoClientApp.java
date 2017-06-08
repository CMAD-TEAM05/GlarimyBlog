package com.glarimy.cmad.blog.service;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;

import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.data.MongoBlogDAO;
import com.mongodb.MongoClient;

public class MongoClientApp {

	public static void main(String[] args) {
		MongoClient mongoClient = new MongoClient("127.0.0.1:27017");
		Morphia morphia = new Morphia();
		String databaseName = "glarimy";
		Datastore datastore = morphia.createDatastore(mongoClient, databaseName);

		MongoBlogDAO dao = new MongoBlogDAO(Book.class, datastore);

		dao.save(new Book(2341, "mongo2"));
		dao.save(new Book(1234, "new item2"));
		System.out.println(dao.get(1234.0));
		System.out.println(dao.findByTitle("new"));
		System.out.println(dao.find().asList());
	}

}
