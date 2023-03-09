package perfectplanner.perfectplanner.service;

import perfectplanner.perfectplanner.dto.MemberRequestDto;
import perfectplanner.perfectplanner.dto.MemberResponseDto;

public interface MemberService {

    boolean join(MemberRequestDto.CreateInfo memberRequestDto);

    MemberResponseDto.LoginInfo login(MemberRequestDto.LoginInfo memberRequestDto);
}
