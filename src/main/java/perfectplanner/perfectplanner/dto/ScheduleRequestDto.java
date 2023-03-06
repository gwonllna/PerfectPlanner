package perfectplanner.perfectplanner.dto;

import jakarta.persistence.Column;

public class ScheduleRequestDto {

    public static class CreateInfo {

        private String name;
        private Long year;
        private Long month;
        private Long day;
        private Long hour;
        private Long minute;
        private Long second;

        public CreateInfo(String name, Long year, Long month, Long day, Long hour, Long minute, Long second) {
            this.name = name;
            this.year = year;
            this.month = month;
            this.day = day;
            this.hour = hour;
            this.minute = minute;
            this.second = second;
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

        public Long getHour() {
            return hour;
        }

        public void setHour(Long hour) {
            this.hour = hour;
        }

        public Long getMinute() {
            return minute;
        }

        public void setMinute(Long minute) {
            this.minute = minute;
        }

        public Long getSecond() {
            return second;
        }

        public void setSecond(Long second) {
            this.second = second;
        }
    }

    public static class GetInfo {

        private Long id;

        public GetInfo(Long id) {
            this.id = id;
        }

        public GetInfo() {
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }
    }

    public static class GetDailyInfo {

        private Long year;
        private Long month;
        private Long day;

        public GetDailyInfo(Long year, Long month, Long day) {
            this.year = year;
            this.month = month;
            this.day = day;
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
    }

    public static class ChangeInfo {

        private Long id;
        private String name;
        private Long year;
        private Long month;
        private Long day;
        private Long hour;
        private Long minute;
        private Long second;

        public ChangeInfo(Long id, String name, Long year, Long month, Long day, Long hour, Long minute, Long second) {
            this.id = id;
            this.name = name;
            this.year = year;
            this.month = month;
            this.day = day;
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }

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

        public Long getHour() {
            return hour;
        }

        public void setHour(Long hour) {
            this.hour = hour;
        }

        public Long getMinute() {
            return minute;
        }

        public void setMinute(Long minute) {
            this.minute = minute;
        }

        public Long getSecond() {
            return second;
        }

        public void setSecond(Long second) {
            this.second = second;
        }
    }

    public static class DeleteInfo {

        private Long id;

        public DeleteInfo() {
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }
    }
}
