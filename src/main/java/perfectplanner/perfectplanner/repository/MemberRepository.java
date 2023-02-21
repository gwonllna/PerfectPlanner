package perfectplanner.perfectplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import perfectplanner.perfectplanner.entity.Member;

public interface MemberRepository extends JpaRepository<Member, String> {

}
