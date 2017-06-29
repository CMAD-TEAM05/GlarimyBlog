package com.glarimy.cmad.blog.data;

import java.util.List;

import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.query.Query;
import org.mongodb.morphia.dao.BasicDAO;

import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.Comment;
import com.glarimy.cmad.blog.api.User;
import com.mongodb.MongoClient;
public class CommentsDAO extends BasicDAO<Comment, String>{

	public CommentsDAO(Class<Comment> entityClass, MongoClient mongoClient, Morphia morphia, String dbName) {
		super(entityClass, mongoClient, morphia, dbName);
		// TODO Auto-generated constructor stub
	}
    
	public List<Comment> findCommentsbyBlogID(String bid) {
		// TODO Auto-generated method stub
		List<Comment> commentlist;
		Query<Comment> query = createQuery().field("UniqueID").equal(bid);
		commentlist = query.asList();
		if(commentlist.isEmpty()){
			return null;
		}else{
			return commentlist;
		}
	}    

}
