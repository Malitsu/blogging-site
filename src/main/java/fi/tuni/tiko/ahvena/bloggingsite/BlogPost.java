package fi.tuni.tiko.ahvena.bloggingsite;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/*
This class holds the BlogPost object which has parameters
String title, String body, Date time and String writer.
 */
@Entity
public class BlogPost {
    private String title;
    private Date time;
    private String writer;

    @Column(columnDefinition = "longtext")
    private String body;

    @Id
    @GeneratedValue
    private int id;

    @OneToMany(mappedBy = "blogPost")
    private List<Comment> comments = new ArrayList<>();

    @Override
    public String toString() {
        return "BlogPost{" +
                "title='" + title + '\'' +
                ", textBody='" + body + '\'' +
                ", publishingTime='" + time + '\'' +
                ", publisher='" + writer + '\'' +
                ", id=" + id +
                '}';
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    public BlogPost(String title, String body, Date time, String writer) {
        this.title = title;
        this.body = body;
        this.time = time;
        this.writer = writer;
    }
    public BlogPost() {}
}
