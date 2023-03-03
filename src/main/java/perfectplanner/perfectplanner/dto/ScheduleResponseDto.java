package perfectplanner.perfectplanner.dto;

public class ScheduleResponseDto {

    public static class CreateInfo {

        private Long id;
        private String name;
        private Long year;
        private Long month;
        private Long day;
        private Long hour;
        private Long minute;
        private Long second;

        public CreateInfo(Long id, String name, Long year, Long month, Long day, Long hour, Long minute, Long second) {
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

        public String getName() {
            return name;
        }

        public Long getYear() {
            return year;
        }

        public Long getMonth() {
            return month;
        }

        public Long getDay() {
            return day;
        }

        public Long getHour() {
            return hour;
        }

        public Long getMinute() {
            return minute;
        }

        public Long getSecond() {
            return second;
        }

        public static CreateInfoBuilder builder() {
            return new CreateInfoBuilder();
        }

        public static class CreateInfoBuilder {

            private Long id = null;
            private String name = null;
            private Long year = null;
            private Long month = null;
            private Long day = null;
            private Long hour = null;
            private Long minute = null;
            private Long second = null;

            public CreateInfoBuilder id(Long id) {
                this.id = id;
                return this;
            }

            public CreateInfoBuilder name(String name) {
                this.name = name;
                return this;
            }

            public CreateInfoBuilder year(Long year) {
                this.year = year;
                return this;
            }

            public CreateInfoBuilder month(Long month) {
                this.month = month;
                return this;
            }

            public CreateInfoBuilder day(Long day) {
                this.day = day;
                return this;
            }

            public CreateInfoBuilder hour(Long hour) {
                this.hour = hour;
                return this;
            }

            public CreateInfoBuilder minute(Long minute) {
                this.minute = minute;
                return this;
            }

            public CreateInfoBuilder second(Long second) {
                this.second = second;
                return this;
            }

            public CreateInfo build() {
                return new CreateInfo(id, name, year, month, day, hour, minute, second);
            }
        }
    }

    public static class GetInfo {

        private Long id;
        private String name;
        private Long year;
        private Long month;
        private Long day;
        private Long hour;
        private Long minute;
        private Long second;

        public GetInfo(Long id, String name, Long year, Long month, Long day, Long hour, Long minute, Long second) {
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

        public String getName() {
            return name;
        }

        public Long getYear() {
            return year;
        }

        public Long getMonth() {
            return month;
        }

        public Long getDay() {
            return day;
        }

        public Long getHour() {
            return hour;
        }

        public Long getMinute() {
            return minute;
        }

        public Long getSecond() {
            return second;
        }

        public static GetInfoBuilder builder() {
            return new GetInfoBuilder();
        }

        public static class GetInfoBuilder {

            private Long id = null;
            private String name = null;
            private Long year = null;
            private Long month = null;
            private Long day = null;
            private Long hour = null;
            private Long minute = null;
            private Long second = null;

            public GetInfoBuilder id(Long id) {
                this.id = id;
                return this;
            }

            public GetInfoBuilder name(String name) {
                this.name = name;
                return this;
            }

            public GetInfoBuilder year(Long year) {
                this.year = year;
                return this;
            }

            public GetInfoBuilder month(Long month) {
                this.month = month;
                return this;
            }

            public GetInfoBuilder day(Long day) {
                this.day = day;
                return this;
            }

            public GetInfoBuilder hour(Long hour) {
                this.hour = hour;
                return this;
            }

            public GetInfoBuilder minute(Long minute) {
                this.minute = minute;
                return this;
            }

            public GetInfoBuilder second(Long second) {
                this.second = second;
                return this;
            }

            public GetInfo build() {
                return new GetInfo(id, name, year, month, day, hour, minute, second);
            }
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

        public String getName() {
            return name;
        }

        public Long getYear() {
            return year;
        }

        public Long getMonth() {
            return month;
        }

        public Long getDay() {
            return day;
        }

        public Long getHour() {
            return hour;
        }

        public Long getMinute() {
            return minute;
        }

        public Long getSecond() {
            return second;
        }

        public static ChangeInfoBuilder builder() {
            return new ChangeInfoBuilder();
        }

        public static class ChangeInfoBuilder {

            private Long id = null;
            private String name = null;
            private Long year = null;
            private Long month = null;
            private Long day = null;
            private Long hour = null;
            private Long minute = null;
            private Long second = null;

            public ChangeInfoBuilder id(Long id) {
                this.id = id;
                return this;
            }

            public ChangeInfoBuilder name(String name) {
                this.name = name;
                return this;
            }

            public ChangeInfoBuilder year(Long year) {
                this.year = year;
                return this;
            }

            public ChangeInfoBuilder month(Long month) {
                this.month = month;
                return this;
            }

            public ChangeInfoBuilder day(Long day) {
                this.day = day;
                return this;
            }

            public ChangeInfoBuilder hour(Long hour) {
                this.hour = hour;
                return this;
            }

            public ChangeInfoBuilder minute(Long minute) {
                this.minute = minute;
                return this;
            }

            public ChangeInfoBuilder second(Long second) {
                this.second = second;
                return this;
            }

            public ChangeInfo build() {
                return new ChangeInfo(id, name, year, month, day, hour, minute, second);
            }
        }
    }

    public static class DeleteInfo {

        private Long id;
        private String name;
        private Long year;
        private Long month;
        private Long day;
        private Long hour;
        private Long minute;
        private Long second;

        public DeleteInfo(Long id, String name, Long year, Long month, Long day, Long hour, Long minute, Long second) {
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

        public String getName() {
            return name;
        }

        public Long getYear() {
            return year;
        }

        public Long getMonth() {
            return month;
        }

        public Long getDay() {
            return day;
        }

        public Long getHour() {
            return hour;
        }

        public Long getMinute() {
            return minute;
        }

        public Long getSecond() {
            return second;
        }

        public static DeleteInfoBuilder builder() {
            return new DeleteInfoBuilder();
        }

        public static class DeleteInfoBuilder {

            private Long id = null;
            private String name = null;
            private Long year = null;
            private Long month = null;
            private Long day = null;
            private Long hour = null;
            private Long minute = null;
            private Long second = null;

            public DeleteInfoBuilder id(Long id) {
                this.id = id;
                return this;
            }

            public DeleteInfoBuilder name(String name) {
                this.name = name;
                return this;
            }

            public DeleteInfoBuilder year(Long year) {
                this.year = year;
                return this;
            }

            public DeleteInfoBuilder month(Long month) {
                this.month = month;
                return this;
            }

            public DeleteInfoBuilder day(Long day) {
                this.day = day;
                return this;
            }

            public DeleteInfoBuilder hour(Long hour) {
                this.hour = hour;
                return this;
            }

            public DeleteInfoBuilder minute(Long minute) {
                this.minute = minute;
                return this;
            }

            public DeleteInfoBuilder second(Long second) {
                this.second = second;
                return this;
            }

            public DeleteInfo build() {
                return new DeleteInfo(id, name, year, month, day, hour, minute, second);
            }
        }
    }
}
