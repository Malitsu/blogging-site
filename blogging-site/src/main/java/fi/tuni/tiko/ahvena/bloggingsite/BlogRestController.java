package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlogRestController {
    @Autowired
    BlogDatabase bdb;

    @CrossOrigin
    @RequestMapping("blogposts")
    public Iterable<BlogPost> showPosts() {

        return bdb.findAll();
    }
}
