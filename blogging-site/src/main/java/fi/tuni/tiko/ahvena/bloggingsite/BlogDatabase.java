package fi.tuni.tiko.ahvena.bloggingsite;

import org.springframework.data.repository.CrudRepository;

public interface BlogDatabase extends CrudRepository<BlogPost, Integer> {
}
