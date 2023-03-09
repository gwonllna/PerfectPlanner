package perfectplanner.perfectplanner.service;

import perfectplanner.perfectplanner.dto.ScheduleRequestDto;
import perfectplanner.perfectplanner.dto.ScheduleResponseDto;

import java.util.List;

public interface ScheduleService {

    boolean saveSchedule(ScheduleRequestDto.CreateInfo scheduleRequestDto);

    ScheduleResponseDto.GetInfo getSchedule(ScheduleRequestDto.GetInfo scheduleRequestDto);

    List<ScheduleResponseDto.GetInfo> getDailySchedule(ScheduleRequestDto.GetDailyInfo scheduleRequestDto);

    boolean changeSchedule(ScheduleRequestDto.ChangeInfo scheduleRequestDto);

    boolean deleteSchedule(ScheduleRequestDto.DeleteInfo scheduleRequestDto);
}
