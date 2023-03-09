package perfectplanner.perfectplanner.entity;

import jakarta.persistence.*;

@Entity
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column(name = "YEARS")
    private Long year;

    @Column(name = "MONTHS")
    private Long month;

    @Column(name = "DAYS")
    private Long day;

    @Column(name = "START_HOURS")
    private Long startHour;

    @Column(name = "FINISH_HOURS")
    private Long finishHour;

    @Column(name = "START_MINUTES")
    private Long startMinute;

    @Column(name = "FINISH_MINUTES")
    private Long finishMinute;

    @Column(name = "START_SECONDS")
    private Long startSecond;

    @Column(name = "FINISH_SECONDS")
    private Long finishSecond;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getYear() {
        return year;
    }

    public void setYear(Long year) {
        this.year = year;
    }

    public Long getMonth() {
        return month;
    }

    public void setMonth(Long month) {
        this.month = month;
    }

    public Long getDay() {
        return day;
    }

    public void setDay(Long day) {
        this.day = day;
    }

    public Long getStartHour() {
        return startHour;
    }

    public void setStartHour(Long startHour) {
        this.startHour = startHour;
    }

    public Long getFinishHour() {
        return finishHour;
    }

    public void setFinishHour(Long finishHour) {
        this.finishHour = finishHour;
    }

    public Long getStartMinute() {
        return startMinute;
    }

    public void setStartMinute(Long startMinute) {
        this.startMinute = startMinute;
    }

    public Long getFinishMinute() {
        return finishMinute;
    }

    public void setFinishMinute(Long finishMinute) {
        this.finishMinute = finishMinute;
    }

    public Long getStartSecond() {
        return startSecond;
    }

    public void setStartSecond(Long startSecond) {
        this.startSecond = startSecond;
    }

    public Long getFinishSecond() {
        return finishSecond;
    }

    public void setFinishSecond(Long finishSecond) {
        this.finishSecond = finishSecond;
    }
}
