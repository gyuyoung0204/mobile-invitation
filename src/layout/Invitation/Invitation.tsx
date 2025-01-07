import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph, Paragraph_sub } from '@/components/Text.tsx';
import 'aos/dist/aos.css';
import AOS from 'aos';

// AOS 초기화
AOS.init({
  duration: 1500, // 애니메이션 지속 시간 (ms)
  offset: 100,    // 애니메이션 시작 위치 (px)
  easing: 'ease-in-out', // 부드러운 애니메이션
  once: true,     // 애니메이션 한 번만 실행
});

const Invitation = () => {
  const { greeting, meeting } = data;

  // 구글 캘린더 URL 생성
  const googleCalendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    meeting.eventTitle
  )}&dates=${meeting.startTime}/${meeting.endTime}&details=${encodeURIComponent(
    meeting.eventDescription
  )}&location=${encodeURIComponent(meeting.eventLocation)}`;

  return (
    <InvitationWrapper>
      <Paragraph_sub data-aos="fade-up" data-aos-delay="0">
        {greeting.sub_message}
      </Paragraph_sub>
      <Paragraph data-aos="fade-up" data-aos-delay="300">
        {greeting.message}
      </Paragraph>
      <Host data-aos="fade-up" data-aos-delay="600" />
      <Caption data-aos="fade-up" data-aos-delay="900" textAlign={'center'}>
        {meeting.eventDetail}
      </Caption>
      <RoundButton
        data-aos="fade-up"
        data-aos-delay="1200"
        target="_blank"
        href={googleCalendarURL}
        rel="noreferrer"
      >
        구글 캘린더 추가하기
      </RoundButton>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
