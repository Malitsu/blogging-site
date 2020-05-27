package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.annotation.PostConstruct;
import java.util.Optional;

@RestController
public class CommentRestController {

    //Create the database object
    @Autowired
    CommentDatabase cdb;

    @PostConstruct
    public void init() {
    }

    //Show the comments
    @CrossOrigin
    @RequestMapping(value= "/comments", method = RequestMethod.GET)
    public Iterable<Comment> showPosts() {
        return cdb.findAll();
    }

    //Show one comment
    @CrossOrigin
    @RequestMapping(value= "/comments/{commentId}", method = RequestMethod.GET)
    public Optional<Comment> showPost(@PathVariable int commentId) {
        return cdb.findById(commentId);
    }

    //Delete comment
    @CrossOrigin
    @RequestMapping(value= "/comments/{commentId}", method= RequestMethod.DELETE)
    public void deleteComment(@PathVariable int commentId) {
        cdb.deleteById(commentId);
    }

    //Add comment
    @CrossOrigin
    @RequestMapping(value = "/comments", method= RequestMethod.POST)
    public Comment saveComment(@RequestBody Comment c) {
        cdb.save(c);
        return c;
    }

    //Modify comment
    @CrossOrigin
    @RequestMapping(value= "/comments/{commentId}", method= RequestMethod.PUT)
    public Optional<Comment> updateComment(@PathVariable int commentId, @RequestBody Comment c) {
        cdb.save(c);
        return cdb.findById(commentId)
                .map(comment -> {
                    c.setBody(comment.getBody());
                    c.setWriter(comment.getWriter());
                    c.setLikes(comment.getLikes());
                    return cdb.save(comment);
                });
    }

}