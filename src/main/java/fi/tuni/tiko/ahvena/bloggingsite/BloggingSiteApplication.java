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
				"Tomatoes are plants that make edible berries in various sizes, colours and shapes. The most typical tomato is rather round, red and about 70 grams. However, the shape can be oblonged or conical or teardroplike, the colour can also be yellow, orange, brown, green, purple or black and the size of the berry from a few grams to 500 grams. There are different types of tomato plants according to their growth style from small bushes to long vines.\n" +
						"\n" +
						"Tomatoes originate from South and Central America from where they were brought to Europe in the 16th century.\n" +
						"\n" +
						"Tomatoes do not survive the Finnish winters outdoors. Some varieties can yeld harvest in the open in Southern Finland if the plants are pre-grown but tomatoes thrive most in greenhouses and balconies with glasses where it is warm and sheltered. However, they need a large pot, lots of water and lots of fertilizer. Tomatoes also need a good deal of sunlight. It is adviceable to sow seeds in March or April to make sure there is enough time for the berries to ripen.\n", new Date(), "Anna"));
		bdb.save(new BlogPost("Chilies & Peppers",
				"Chilies and peppers are basically different forms of the same family of plants. In general people refer to chilies when the berry is smallish and has a good amount of capsaicin which feels like a burning sensation in the mouth (and in the eyes as well if it gets there). Peppers refers to the mild and more ”meaty” varieties. The ripe berries’ colour varies a lot from red, green, yellow and orange to black, brown and purple. The plants are bushlike and can grow up to three meters high in the right conditions.\n" +
						"\n" +
						"Chilies originate from Mexico but today they are even more commonly grown in Eastern Asia.\n" +
						"\n" +
						"Chilies don’t survive the Finnish winters so they are mainly grown in greenhouses, indoors or balconies with glasses. The seeds need to be sown early, in March at the latest. The seedlings usually need some artificial light in the spring. The plants need a large pot, lots of water, lots of fertilizer and lots of sunlight to thrive.\n", new Date(), "Anna"));
		bdb.save(new BlogPost("Geraniums",
				"Geraniums are a flowering plants. The real family name is Pelargonium. There are over 200 species in the genus and they originate from tropical and temperate regions of the world. They grow as perennials, succulents and shrubs and the flowers can be red, pink, purple, white and near black with many combinations of those. \n" +
						"\n" +
						"Some species have become very popular as house plants and bedding plants. In Finland there are geraniums which have been brought here over 100 years ago and have spread from house to house as cuttings. They are not poisonous but generally have a very strong taste. Some varieties have scented leaves and are also edible.\n" +
						"\n" +
						"Geraniums thrive best in warmth and they tolerate a reasonable amount of drought which makes them ideal plants for sunny glassed balconies. They may survive a winter indoors but best places would be some cooler places like traditional porches.\n", new Date(), "Anna"));
		bdb.save(new BlogPost("Spring Flowers",
				"It is nice to have some flowers on the balcony early in the spring when few other plants can yet survive. The best of these plants that tolerate cold or even frost are pansies, violets and daffodils. These are also the first flowers which are typically available in the stores in the spring.\n" +
						"\n" +
						"Pansies and violets belong to the same genum. Generally pansies have very large flowers and violets smaller. Both come in almost all possible colours except for pinks. They are rather low, 20 cm maximum. They are all poison free and violets are sometimes used in decorating food and making candies violets.\n" +
						"\n" +
						"Daffodils are bulbous spring flowers often combined with Easter. They grow outside in Finland if planted but in springtime flowering daffodils are sold in stores. The colour of the flowers range from yellow to white and orange. Daffodils are poisonous. Once they have flowered the bulbs can be planted outside to bloom next year.\n", new Date(), "Anna"));
		bdb.save(new BlogPost("Herbs",
				"Herbs come in many forms but what combines them is that people use their flavourful leaves in foods to give them some taste. There are dozens of commonly used herbs so we’ll introduce just a few favourites.\n" +
						"\n" +
						"Cilantro, also known as coriander, is an herb used both in Mexican and Southeast Asian kitchen a lot. Both leaves and seeds are used. Cilantro grows fast in the warmth of the balcony so it can be sown several times during one summer. It likes lots of sunshine and moderate water.\n" +
						"\n" +
						"Basil is the main ingredient of the pesto sauce and used very much in the Italian kitchen. It can be grown on a balcony when the temperatures are warm but it is very sensitive to cold so frosts will kill it. Basil needs rather much water.\n", new Date(), "Anna"));
		bdb.save(new BlogPost("Pots",
				"There are lots of different types of pots available for balconies. In general it is a good idea to have largish pots because they don’t dry as fast as small ones. \n" +
						"\n" +
						"If you want to make sure your non-annual plant survives the winter, the best option would be a thermal pot. They are made with thick insulating plastic.\n" +
						"\n" +
						"Pottery is a traditional pot material. It is breathable to some extent and it doesn’t heat immediately and can hold warmth longer.\n" +
						"\n" +
						"Plastic is lightweight, non-breathable and it can heat quickly.\n" +
						"\n" +
						"Wood, rattan and metals with plastic lining can all be used.\n", new Date(), "Anna"));
		bdb.save(new BlogPost("Fertilizing",
				"Stores sell many different kinds of fertilizers for different plants and different purposes. It woould be adviceable to find out about the needs of the plants you have because some plants do not like to have much fertilizing.\n" +
						"\n" +
						"Mainly fertilizers for fruit and flowers contain much potassium. Same fertilizer can be used for both.\n" +
						"\n" +
						"Fertilizers meant for leaves’ growth contain more nitrogen than potassium.\n" +
						"\n" +
						"However, household waste has some good additions as well. Use coffee grinds are good fertilizer for many plants in moderate amounts. Dried and ground egg shells are a good source of calcium and some other nurtients for the plants.\n", new Date(), "Anna"));

	}
}
