package perfectplanner.perfectplanner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import perfectplanner.perfectplanner.dto.MemberRequestDto;
import perfectplanner.perfectplanner.dto.MemberResponseDto;
import perfectplanner.perfectplanner.service.MemberService;

@RestController
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/member/join")
    public boolean createMember(@RequestBody MemberRequestDto.CreateInfo memberRequestDto) {
        return memberService.join(memberRequestDto);
    }

    @PostMapping("/member/login")
    public ResponseEntity<MemberResponseDto.LoginInfo> login(@RequestBody MemberRequestDto.LoginInfo memberRequestDto) {
        return ResponseEntity.status(HttpStatus.OK).body(memberService.login(memberRequestDto));
    }
}