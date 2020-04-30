package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class BlogRestController {
    //Create the database object
    @Autowired
    BlogDatabase bdb;
//Show the blog posts
    @CrossOrigin
    @RequestMapping("blogposts")
    public Iterable<BlogPost> showPosts() {
        return bdb.findAll();
    }
    //Delete blog posts
    @CrossOrigin
    @RequestMapping(value= "/blogposts/{postId}", method= RequestMethod.DELETE)
    public void deletePost(@PathVariable int postId) {
        bdb.deleteById(postId);
    }
    //Add blog posts
    @CrossOrigin
    @RequestMapping(value = "/blogposts", method= RequestMethod.POST)
    public BlogPost savePost(@RequestBody BlogPost b) {
        bdb.save(b);
        return b;
    }
    //Modify blog posts
    @CrossOrigin
    @RequestMapping(value= "/blogposts/{postId}", method= RequestMethod.PUT)
    public Optional<BlogPost> updatePost(@PathVariable int postId, @RequestBody BlogPost b) {
        bdb.save(b);
        return bdb.findById(postId)
                .map(post -> {
                    b.setBody(post.getBody());
                    b.setTitle(post.getTitle());
                    b.setWriter(post.getWriter());
                    return bdb.save(post);
                });
    }



}
