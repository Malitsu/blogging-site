package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class BlogRestController {
    @Autowired
    BlogDatabase bdb;

    @CrossOrigin
    @RequestMapping("blogposts")
    public Iterable<BlogPost> showPosts() {

        return bdb.findAll();
    }
    @CrossOrigin
    @RequestMapping(value= "/blogposts/{postId}", method= RequestMethod.DELETE)
    public void deletePost(@PathVariable int postId) {
        bdb.deleteById(postId);
    }
    @CrossOrigin
    @RequestMapping(value = "/blogposts", method= RequestMethod.POST)
    public BlogPost savePost(@RequestBody BlogPost b) {
        bdb.save(b);
        return b;
    }
    @CrossOrigin
    @RequestMapping(value= "/blogposts/{postId}", method= RequestMethod.PUT)
    public Optional<BlogPost> modifyPost(@RequestBody BlogPost b, @PathVariable int id) {
        return bdb.findById(id)
                .map(post -> {
                    b.setBody(post.getBody());
                    b.setTitle(post.getTitle());
                    b.setWriter(post.getWriter());
                    return bdb.save(post);
                });
    }



}
