package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BloggingSiteApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BloggingSiteApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Team Ahvena: Tiina Malinen, Anna Metsäpelto");
	}
}
