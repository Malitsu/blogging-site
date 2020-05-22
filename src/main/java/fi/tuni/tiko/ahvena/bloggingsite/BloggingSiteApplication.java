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
		System.out.println("Team Ahvena: Tiina Malinen, Anna Metsäpelto");
		bdb.save(new BlogPost("Tomatoes",
				"Tomatoes do not survive the Finnish winters outdoors.", new Date(), "Anna"));
		bdb.save(new BlogPost("Chilies & Peppers",
				"Chilies don’t survive the Finnish winters so they are mainly grown in greenhouses, indoors or balconies with glasses. ", new Date(), "Anna"));
		bdb.save(new BlogPost("Geraniums",
						"Geraniums thrive best in warmth and they tolerate a reasonable amount of drought which makes them ideal plants for sunny glassed balconies.", new Date(), "Anna"));
		bdb.save(new BlogPost("Spring Flowers",
						"Daffodils are bulbous spring flowers often combined with Easter.", new Date(), "Anna"));
		bdb.save(new BlogPost("Herbs",
				"Herbs come in many forms but what combines them is that people use their flavourful leaves in foods to give them some taste."
        , new Date(), "Anna"));
		bdb.save(new BlogPost("Pots",
				"There are lots of different types of pots available for balconies."
				, new Date(), "Anna"));
		bdb.save(new BlogPost("Fertilizing",
				"Stores sell many different kinds of fertilizers."
				, new Date(), "Anna"));

	}
}
