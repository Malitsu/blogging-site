package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

//This is the interface that extends CrudRepository for getting useful methods
@Repository
public interface CommentDatabase extends CrudRepository<Comment, Integer> {
}