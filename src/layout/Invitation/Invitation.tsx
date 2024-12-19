import styled from '@emotion/styled';
import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';

const Invitation = () => {
  const { meeting } = data;

    // 구글 캘린더 URL 생성
    const googleCalendarURL = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      meeting.eventTitle
    )}&dates=${meeting.startTime}/${meeting.endTime}&details=${encodeURIComponent(
      meeting.eventDescription
    )}&location=${encodeURIComponent(meeting.eventLocation)}`;
  
  return (
    <InvitationWrapper>
      <Paragraph>{meeting.message}</Paragraph>
      <Host />
      <Caption textAlign={'center'}>{meeting.eventDetail}</Caption>
      <RoundButton
        target="_blank"
        href={googleCalendarURL}
        rel="noreferrer">
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
