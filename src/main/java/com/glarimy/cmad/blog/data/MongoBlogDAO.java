package com.glarimy.cmad.blog.data;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;
import org.mongodb.morphia.query.Query;

import com.glarimy.cmad.blog.api.Book;

public class MongoBlogDAO extends BasicDAO<Book, Double> {

	public MongoBlogDAO(Class<Book> entityClass, Datastore ds) {
		super(entityClass, ds);
	}

	public List<Book> findByTitle(String title) {
		Query<Book> query = createQuery().field("title").contains(title).field("isbn").lessThan(3000);
		return query.asList();
	}

}
