package fi.tuni.tiko.ahvena.bloggingsite;

import javax.persistence.*;
import java.util.Date;
/*
This class holds the BlogComment object which has parameters
String title, String body, Date time and String writer.
 */
@Entity
public class Comment {
    private Date time;
    private String writer;
    private int likes;
    public String body;

    @Id
    @GeneratedValue
    public int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_blog_post")
    private BlogPost blogPost;

    @Override
    public String toString() {
        return "BlogComment{" +
                ", time=" + time +
                ", writer='" + writer + '\'' +
                ", likes=" + likes +
                ", body='" + body + '\'' +
                ", id=" + id +
                '}';
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

    public int getLikes() { return likes; }

    public void setLikes(int likes) { this.likes = likes; }

    public Comment(String body, Date time, String writer, int likes) {
        this.body = body;
        this.time = time;
        this.writer = writer;
        this.likes = likes;
    }
    public Comment() {}
}