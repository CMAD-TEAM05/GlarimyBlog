package com.glarimy.cmad.blog.data;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import com.glarimy.cmad.blog.api.Book;
import com.glarimy.cmad.blog.api.User;

public class JPABlogDAO implements BlogDAO {
	private EntityManagerFactory factory = Persistence.createEntityManagerFactory("com.glarimy.library");

	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		em.persist(user);
		em.getTransaction().commit();
		em.close();
	}
	
	@Override
	public User findUser(String name) {
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		User userInfo = em.find(User.class, name);
		em.getTransaction().commit();
		em.close();
		return userInfo;

	}
	
	@Override
	public void create(Book book) {
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		em.persist(book);
		em.getTransaction().commit();
		em.close();
	}

	@Override
	public Book read(int isbn) {
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		Book book = em.find(Book.class, isbn);
		em.getTransaction().commit();
		em.close();
		return book;

	}

}
