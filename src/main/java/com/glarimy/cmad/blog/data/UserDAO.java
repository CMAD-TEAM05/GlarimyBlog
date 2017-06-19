package com.glarimy.cmad.blog.data;

import java.util.List;

import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.dao.BasicDAO;

import com.glarimy.cmad.blog.api.User;
import com.mongodb.MongoClient;

public class UserDAO extends BasicDAO<User, String> {
	public UserDAO(Class<User> entityClass, MongoClient mongoClient, Morphia morphia, String dbName) {
		super(entityClass, mongoClient, morphia, dbName);
		// TODO Auto-generated constructor stub
	}
	
	public User findUserbyName(String name){
		List<User> userlist;
		Query<User> query = createQuery().field("name").equal(name);
		userlist = query.asList();
		if(userlist.isEmpty()){
			return null;
		}else{
			return userlist.get(0);
		}		
	} 
}
