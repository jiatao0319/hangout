package hangout.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Idea {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private Date date;
    private HangoutType type;
    private double matchingRate;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public HangoutType getType() {
        return type;
    }

    public void setType(HangoutType type) {
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public double getMatchingRate() {
        return matchingRate;
    }

    public void setMatchingRate(double matchingRate) {
        this.matchingRate = matchingRate;
    }
}
