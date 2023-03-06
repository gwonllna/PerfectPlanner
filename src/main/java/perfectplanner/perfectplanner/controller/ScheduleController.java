package perfectplanner.perfectplanner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import perfectplanner.perfectplanner.dto.ScheduleRequestDto;
import perfectplanner.perfectplanner.dto.ScheduleResponseDto;
import perfectplanner.perfectplanner.service.ScheduleService;

import java.util.List;

@RestController
public class ScheduleController {

    private final ScheduleService scheduleService;

    @Autowired
    public ScheduleController(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }


    @GetMapping("/schedule")
    public ScheduleResponseDto.GetInfo getSchedule(@RequestBody ScheduleRequestDto.GetInfo scheduleRequestDto) {
        return scheduleService.getSchedule(scheduleRequestDto);
    }

    @GetMapping("/schedule/day")
    public List<ScheduleResponseDto.GetInfo> getDailySchedule(@RequestParam Long year,
                                                              @RequestParam Long month,
                                                              @RequestParam Long day) {
        ScheduleRequestDto.GetDailyInfo scheduleRequestDto = new ScheduleRequestDto.GetDailyInfo(year, month, day);
        return scheduleService.getDailySchedule(scheduleRequestDto);
    }

    @PostMapping("/schedule")
    public boolean CreateSchedule(@RequestBody ScheduleRequestDto.CreateInfo scheduleRequestDto) {
        return scheduleService.saveSchedule(scheduleRequestDto);
    }

    @PutMapping("/schedule")
    public boolean changeSchedule(@RequestBody ScheduleRequestDto.ChangeInfo scheduleRequestDto) {
        return scheduleService.changeSchedule(scheduleRequestDto);
    }

    @DeleteMapping("/schedule")
    public boolean deleteSchedule(@RequestBody ScheduleRequestDto.DeleteInfo scheduleRequestDto) {
        return scheduleService.deleteSchedule(scheduleRequestDto);
    }
}
