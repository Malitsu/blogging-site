package fi.tuni.tiko.ahvena.bloggingsite;


import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
class MyBean implements CommandLineRunner {
    public MyBean() {
        System.out.println("MyBean created");
    }
    public void run(String [] args) {
        System.out.println("Server ready!");
    }
}