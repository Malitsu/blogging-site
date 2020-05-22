package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication(scanBasePackages = {"fi.tuni.tiko.ahvena.bloggingsite"})

public class BloggingSiteApplication implements CommandLineRunner {
//Create the object for the database
	@Autowired
	BlogDatabase bdb;

	public static void main(String[] args) {
		SpringApplication.run(BloggingSiteApplication.class, args);
	}
/*
This method adds pre-existing data to the memory based database and gives the
starting information for running the app to the console.
 */
	@Override
	public void run(String... args) throws Exception {
	}
}
