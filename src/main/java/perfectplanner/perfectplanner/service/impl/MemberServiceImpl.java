package perfectplanner.perfectplanner.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import perfectplanner.perfectplanner.dto.MemberDto;
import perfectplanner.perfectplanner.entity.Member;
import perfectplanner.perfectplanner.repository.MemberRepository;
import perfectplanner.perfectplanner.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberServiceImpl(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Override
    public MemberDto join(MemberDto memberDto) {
        System.out.println("MemberServiceImpl");
        Member member = new Member();
        member.setId(memberDto.getId());
        member.setPassword(memberDto.getPassword());
        member.setName(memberDto.getName());
        member.setEmail(memberDto.getEmail());

        memberRepository.save(member);

        return memberDto;
    }
}
