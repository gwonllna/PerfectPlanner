package perfectplanner.perfectplanner.dto;

public class MemberResponseDto {

    public static class LoginInfo {

        private String id;
        private String name;
        private String email;

        public LoginInfo(String id, String name, String email) {
            this.id = id;
            this.name = name;
            this.email = email;
        }

        public String getId() {
            return id;
        }

        public String getName() {
            return name;
        }

        public String getEmail() {
            return email;
        }

        public static LoginInfoBuilder builder() {
            return new LoginInfoBuilder();
        }

        public static class LoginInfoBuilder {

            private String id;
            private String name;
            private String email;

            public LoginInfoBuilder id(String id) {
                this.id = id;
                return this;
            }

            public LoginInfoBuilder name(String name) {
                this.name = name;
                return this;
            }

            public LoginInfoBuilder email(String email) {
                this.email = email;
                return this;
            }

            public LoginInfo build() {
                return new LoginInfo(id, name, email);
            }
        }
    }
}
