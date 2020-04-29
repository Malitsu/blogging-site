package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogDatabase extends CrudRepository<BlogPost, Integer> {
}
