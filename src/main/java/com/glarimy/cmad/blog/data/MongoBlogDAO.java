package com.glarimy.cmad.blog.data;

import java.util.List;

import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.Morphia;
import org.mongodb.morphia.dao.BasicDAO;
import org.mongodb.morphia.query.Query;

import com.glarimy.cmad.blog.api.Blog;
import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.api.User;
import com.mongodb.BasicDBObject;
import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DB;
import com.mongodb.DBCollection;
import com.mongodb.DBCursor;
import com.mongodb.DBObject;
import com.mongodb.MongoClient;
import com.mongodb.WriteResult;


public class MongoBlogDAO implements BlogDAO {
	MongoClient mongoclient = new MongoClient("localhost", 27017);
	DB db = mongoclient.getDB("BlogDB");
	Morphia morphia = new Morphia();
	UserDAO userDAO = new UserDAO(User.class,mongoclient,morphia,"BlogDB");
	BlogColDAO blogColDAO = new BlogColDAO(Blog.class,mongoclient,morphia,"BlogDB");
	
	@Override
	public void create(Book book) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Book read(int isbn) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		/*DBCollection col = db.getCollection("users");
		DBObject doc = createDBObject(user);
		col.insert(doc);
		*/
		userDAO.save(user);
	}

	@Override
	public User findUser(String name) {
		// TODO Auto-generated method stub
		/*DBCollection col = db.getCollection("users");
		BasicDBObject query = new BasicDBObject();
		query.put("name",name);
		//DBObject query = BasicDBObjectBuilder.start().add("name", name).get();
		DBCursor cursor = col.find(query);
		if(cursor.hasNext()){
			System.out.println(cursor.next());
			return null;
		}else{
			//user not found
			return null;
		}
		*/
		if(userDAO.findUserbyName(name)!=null){
			System.out.println("Found the user by name" + name);
		}else{
			System.out.println("Couldn't find the user by name" + name);
		}
		return userDAO.findUserbyName(name);
	}

	@Override
	public void addBlog(Blog blog) {
		// TODO Auto-generated method stub
		blogColDAO.save(blog);
	}

	/*public MongoBlogDAO(Class<Book> entityClass, Datastore ds) {
		super(entityClass, ds);
	}

	public List<Book> findByTitle(String title) {
		Query<Book> query = createQuery().field("isbn").lessThan(30000);
		return query.asList();
	}
    
	private static DBObject createDBObject(User user) {
		BasicDBObjectBuilder docBuilder = BasicDBObjectBuilder.start();
								
		docBuilder.append("name", user.getName());
		docBuilder.append("age", user.getAge());
		//docBuilder.append("role", user.get());
		//docBuilder.append("isEmployee", user.isEmployee());
		return docBuilder.get();
	}
    */
	
	@Override
	public List<Blog> getBlogsByUser(String uname) {
		// TODO Auto-generated method stub
		
		return null;
	}

	@Override
	public List<Blog> searchBlogsBytitle(String keyword) {
		// TODO Auto-generated method stub
		List<Blog> blogList;
		blogList = blogColDAO.findBlogsbyTitle(keyword);
		if(blogList == null){
			return null;
		} else {
			return blogList;
		}
			
	}
	
	
}
