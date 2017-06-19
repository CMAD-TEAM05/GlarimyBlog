package com.glarimy.cmad.blog.data;

import java.util.List;

import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.dao.BasicDAO;

import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.User;
import com.mongodb.MongoClient;
public class BlogColDAO extends BasicDAO<Blog, String>{

	public BlogColDAO(Class<Blog> entityClass, MongoClient mongoClient, Morphia morphia, String dbName) {
		super(entityClass, mongoClient, morphia, dbName);
		// TODO Auto-generated constructor stub
	}
    
	public List<Blog> findBlogsbyTitle(String keyword){
		List<Blog> blogList;
		Query<Blog> query = createQuery().field("title").contains(keyword);
		blogList = query.asList();
		if(blogList.isEmpty()){
			return null;
		}else{
			return blogList;
		}		
	} 
	
	public boolean isIdUnique(String id){
		List<Blog> blog;
		Query<Blog> query = createQuery().field("UniqueID").equal(id);
		blog = query.asList();
		if(blog.isEmpty()){
			return true;
		}else{
			return false;
		}	
	}

	public List<Blog> findBlogsbyUser(String uname) {
		// TODO Auto-generated method stub
		List<Blog> blogList;
		Query<Blog> query = createQuery().field("userName").equal(uname);
		blogList = query.asList();
		if(blogList.isEmpty()){
			return null;
		}else{
			return blogList;
		}
	}
}
