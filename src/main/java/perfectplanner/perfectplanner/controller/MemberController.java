package perfectplanner.perfectplanner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import perfectplanner.perfectplanner.dto.MemberDto;
import perfectplanner.perfectplanner.service.MemberService;

@RestController
public class MemberController {

    private final MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @PostMapping("/member/join")
    public void createMember(@RequestBody MemberDto memberDto) {
        memberService.join(memberDto);
    }
}
