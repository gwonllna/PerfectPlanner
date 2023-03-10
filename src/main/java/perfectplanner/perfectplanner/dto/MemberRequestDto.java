package perfectplanner.perfectplanner.dto;

public class MemberRequestDto {

    public static class CreateInfo {
        private String id;
        private String password;
        private String name;
        private String email;

        public CreateInfo(String id, String password, String name, String email) {
            this.id = id;
            this.password = password;
            this.name = name;
            this.email = email;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }

    public static class LoginInfo {
        private String id;
        private String password;

        public LoginInfo(String id, String password) {
            this.id = id;
            this.password = password;
        }

        public String getId() {
            return id;
        }

        public void setId(String id) {
            this.id = id;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
