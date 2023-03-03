package perfectplanner.perfectplanner.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import perfectplanner.perfectplanner.entity.Schedule;

import java.util.List;
import java.util.Optional;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

    List<Schedule> findByYearAndMonthAndDay(Long year, Long month, Long day);
}
