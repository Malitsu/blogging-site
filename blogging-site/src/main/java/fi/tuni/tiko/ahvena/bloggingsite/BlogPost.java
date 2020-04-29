package fi.tuni.tiko.ahvena.bloggingsite;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class BlogPost {
    public String title;
    public String textBody;
    public Date publishingTime;
    public String publisher;

    @Id
    @GeneratedValue
    public int id;

    @Override
    public String toString() {
        return "BlogPost{" +
                "title='" + title + '\'' +
                ", textBody='" + textBody + '\'' +
                ", publishingTime='" + publishingTime + '\'' +
                ", publisher='" + publisher + '\'' +
                ", id=" + id +
                '}';
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTextBody() {
        return textBody;
    }

    public void setTextBody(String textBody) {
        this.textBody = textBody;
    }

    public Date getPublishingTime() {
        return publishingTime;
    }

    public void setPublishingTime(Date publishingTime) {
        this.publishingTime = publishingTime;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public BlogPost(String title, String textBody, Date publishingTime, String publisher) {
        this.title = title;
        this.textBody = textBody;
        this.publishingTime = publishingTime;
        this.publisher = publisher;
    }
    public BlogPost() {}
}
