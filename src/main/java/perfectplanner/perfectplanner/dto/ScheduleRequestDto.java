package perfectplanner.perfectplanner.dto;

import jakarta.persistence.Column;

public class ScheduleRequestDto {

    public static class CreateInfo {

        private String name;
        private Long year;
        private Long month;
        private Long day;
        private Long startHour;
        private Long finishHour;
        private Long startMinute;
        private Long finishMinute;
        private Long startSecond;
        private Long finishSecond;

        public CreateInfo(String name, Long year, Long month, Long day, Long startHour, Long finishHour, Long startMinute, Long finishMinute, Long startSecond, Long finishSecond) {
            this.name = name;
            this.year = year;
            this.month = month;
            this.day = day;
            this.startHour = startHour;
            this.finishHour = finishHour;
            this.startMinute = startMinute;
            this.finishMinute = finishMinute;
            this.startSecond = startSecond;
            this.finishSecond = finishSecond;
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
        private Long startHour;
        private Long finishHour;
        private Long startMinute;
        private Long finishMinute;
        private Long startSecond;
        private Long finishSecond;

        public ChangeInfo(Long id, String name, Long year, Long month, Long day, Long startHour, Long finishHour, Long startMinute, Long finishMinute, Long startSecond, Long finishSecond) {
            this.id = id;
            this.name = name;
            this.year = year;
            this.month = month;
            this.day = day;
            this.startHour = startHour;
            this.finishHour = finishHour;
            this.startMinute = startMinute;
            this.finishMinute = finishMinute;
            this.startSecond = startSecond;
            this.finishSecond = finishSecond;
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

    public static class DeleteInfo {

        private Long id;

        public DeleteInfo() {
        }

        public DeleteInfo(Long id) {
            this.id = id;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }
    }
}
