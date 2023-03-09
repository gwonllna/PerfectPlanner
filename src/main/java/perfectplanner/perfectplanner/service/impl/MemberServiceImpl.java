package perfectplanner.perfectplanner.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import perfectplanner.perfectplanner.dto.MemberRequestDto;
import perfectplanner.perfectplanner.dto.MemberResponseDto;
import perfectplanner.perfectplanner.entity.Member;
import perfectplanner.perfectplanner.repository.MemberRepository;
import perfectplanner.perfectplanner.service.MemberService;

import java.util.Optional;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public boolean join(MemberRequestDto.CreateInfo memberRequestDto) {
        Member member = new Member();
        member.setId(memberRequestDto.getId());
        member.setPassword(memberRequestDto.getPassword());
        member.setName(memberRequestDto.getName());
        member.setEmail(memberRequestDto.getEmail());

        if (joinCheck(memberRequestDto)) {
            memberRepository.save(member);
            return true;
        } else {
            return false;
        }
    }

    public boolean joinCheck(MemberRequestDto.CreateInfo memberRequestDto) {
        Optional<Member> checkMember = memberRepository.findById(memberRequestDto.getId());
        if (checkMember.isPresent()) {
            return false;
        } else {
            return true;
        }
    }

    @Override
    public MemberResponseDto.LoginInfo login(MemberRequestDto.LoginInfo memberRequestDto){
        Optional<Member> member = memberRepository.findById(memberRequestDto.getId());
        if (!member.isPresent()) {
            return MemberResponseDto.LoginInfo.builder()
                    .build();
        } else if (!member.get().getPassword().equals(memberRequestDto.getPassword())) {
            return MemberResponseDto.LoginInfo.builder()
                    .build();
        } else {
            return MemberResponseDto.LoginInfo.builder()
                    .id(member.get().getId())
                    .name(member.get().getName())
                    .email(member.get().getEmail())
                    .build();
        }
    }
}
