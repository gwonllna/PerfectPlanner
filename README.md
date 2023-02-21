# 1. 프로젝트 Description
- 프로젝트 명

- 어떤 프로젝트인지 소개


# 2. 프로젝트 정보
- 설치(Getting Started / Installation)

- ### 컴파일 방법
  1. H2 DB 실행
     1. terminal에서 H2/bin 폴더로 이동<br/><br/>
     2. 1. macOS의 경우 ./h2.sh 명령어를 실행하고 되지 않는다면 chmod 755 h2.sh 명령어를 입력한후 ./h2.sh 명령어를 다시 입력한다.
        2. 윈도우의 경우 h2.bat 명령어로 실행하고 되지 않는다면 .\h2.bat 명령어를 입력한다.<br/><br/>
     3. 1. 아직 DB를 생성하지 않았다면 다른 설정은 모두 그대로 두고 JDBC URL에 jdbc:h2:~/perfectplanner를 입력하고 연결 버튼을 눌러 DB를 생성한다.
        2. DB를 한번 생성한 이후에는 위 과정은 생략한다.<br/><br/>
  2. Reactapp 실행
     1. terminal에서 perfectplanner/src/main/webapp/reactapp 폴더로 이동<br/><br/>
     2. npm start 명령어로 실행한다.
  3. Spring 실행
     1. src/main/java 폴더의 PerfectplannerApplication 파일을 실행한다.<br/><br/>
  4. 실행 결과 확인
     1. localhost:8080으로 접속하여 실행결과를 확인한다.
     2. react 파일을 수정하면 자동으로 rerendering이 시작된다.
     3. spring 파일을 수정하면 PerfectplannerApplication 파일을 재실행해야 반영된다.

- 사용 환경, 브라우저 서포트(웹 프로젝트라면!)

- 간단한 사용 방법 및 예제


# 3. Contribute
- 다른 사람들이 코드에 Contribute하기 쉽도록 설명

- 어떤 류의 Contribute를 원하는지 또는 Contributing 규칙 등을 적을 수도 있다.


# 4. LICENSE
- 라이선스 : 저작물의 수정 배포에 대한 권한이나 저작권들에 대한 조항들

- 보통 MIT License를 많이 사용하고 BSD 라이선스도 많이 사용한다


# 5. 외부리소스 정보
- 프로젝트에 포함된 외부 코드나 리소스 정보(각각의 출처 및 배포 라이선스)


# 6. Code Status
- Shield라는 것을 사용하여 [build | passing]과 같은 정보를 줄 수 있다.

- 프로젝트가 커질수록 도움이 되는 부분