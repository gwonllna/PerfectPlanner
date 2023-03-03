package perfectplanner.perfectplanner.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import perfectplanner.perfectplanner.dto.ScheduleRequestDto;
import perfectplanner.perfectplanner.dto.ScheduleResponseDto;
import perfectplanner.perfectplanner.entity.Schedule;
import perfectplanner.perfectplanner.repository.ScheduleRepository;
import perfectplanner.perfectplanner.service.ScheduleService;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    private final ScheduleRepository scheduleRepository;

    @Autowired
    public ScheduleServiceImpl(ScheduleRepository scheduleRepository) {
        this.scheduleRepository = scheduleRepository;
    }

    @Override
    public boolean saveSchedule(ScheduleRequestDto.CreateInfo scheduleRequestDto) {
        Schedule schedule = new Schedule();
        schedule.setName(scheduleRequestDto.getName());
        schedule.setYear(scheduleRequestDto.getYear());
        schedule.setMonth(scheduleRequestDto.getMonth());
        schedule.setDay(scheduleRequestDto.getDay());
        schedule.setHour(scheduleRequestDto.getHour());
        schedule.setMinute(scheduleRequestDto.getMinute());
        schedule.setSecond(scheduleRequestDto.getSecond());

        scheduleRepository.save(schedule);

        return true;
    }

    @Override
    public ScheduleResponseDto.GetInfo getSchedule(ScheduleRequestDto.GetInfo scheduleRequestDto) {

        Optional<Schedule> schedule = scheduleRepository.findById(scheduleRequestDto.getId());

        return ScheduleResponseDto.GetInfo.builder()
                .id(schedule.get().getId())
                .name(schedule.get().getName())
                .year(schedule.get().getYear())
                .month(schedule.get().getMonth())
                .day(schedule.get().getDay())
                .hour(schedule.get().getHour())
                .minute(schedule.get().getMinute())
                .second(schedule.get().getSecond())
                .build();
    }

    @Override
    public List<ScheduleResponseDto.GetInfo> getDailySchedule(ScheduleRequestDto.GetMonthlyInfo scheduleRequestDto) {
        List<Schedule> dailyScheduleList = scheduleRepository.findByYearAndMonthAndDay(
                scheduleRequestDto.getYear(),
                scheduleRequestDto.getMonth(),
                scheduleRequestDto.getDay());
        List<ScheduleResponseDto.GetInfo> dailyScheduleResponseDtoList = new LinkedList<>();
        for (Schedule dailySchedule : dailyScheduleList) {
            dailyScheduleResponseDtoList.add(ScheduleResponseDto.GetInfo.builder()
                    .id(dailySchedule.getId())
                    .name(dailySchedule.getName())
                    .year(dailySchedule.getYear())
                    .month(dailySchedule.getMonth())
                    .day(dailySchedule.getDay())
                    .hour(dailySchedule.getHour())
                    .minute(dailySchedule.getMinute())
                    .second(dailySchedule.getSecond())
                    .build());

        }
        return dailyScheduleResponseDtoList;
    }

    @Override
    public boolean changeSchedule(ScheduleRequestDto.ChangeInfo scheduleRequestDto) {

        Optional<Schedule> schedule = scheduleRepository.findById(scheduleRequestDto.getId());

        if (!schedule.isPresent()) {
            return false;
        } else {
            scheduleRepository.delete(schedule.get());

            Schedule newSchedule = new Schedule();
            newSchedule.setId(scheduleRequestDto.getId());
            newSchedule.setName(scheduleRequestDto.getName());
            newSchedule.setYear(scheduleRequestDto.getYear());
            newSchedule.setMonth(scheduleRequestDto.getMonth());
            newSchedule.setDay(scheduleRequestDto.getDay());
            newSchedule.setHour(scheduleRequestDto.getHour());
            newSchedule.setMinute(scheduleRequestDto.getMinute());
            newSchedule.setSecond(scheduleRequestDto.getSecond());

            scheduleRepository.save(newSchedule);

            return true;
        }
    }

    @Override
    public boolean deleteSchedule(ScheduleRequestDto.DeleteInfo scheduleRequestDto) {

        Optional<Schedule> schedule = scheduleRepository.findById(scheduleRequestDto.getId());

        if (!schedule.isPresent()) {
            return false;
        } else {
            scheduleRepository.delete(schedule.get());
            return true;
        }
    }
}
