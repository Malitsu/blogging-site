package fi.tuni.tiko.ahvena.bloggingsite;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class BlogPost {
    public String title;
    public String body;
    public Date time;
    public String writer;

    @Id
    @GeneratedValue
    public int id;

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
