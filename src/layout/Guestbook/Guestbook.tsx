import styled from '@emotion/styled';
import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';

const Guestbook = () => {
  return (
    <GuestBookWrapper>
      <Heading2>
        메시지를 남겨주세요.
        <br />
        결혼식 하루 뒤, 신랑 신부에게 전달됩니다.
      </Heading2>
      <CommentForm />
    </GuestBookWrapper>
  );
};

export default Guestbook;

const GuestBookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 50px;
  width: 100%; /* 전체 화면 너비에 맞춤 */
  max-width: 1200px; /* 데스크톱에서 최대 너비 제한 */
  padding: 20px; /* 내부 여백 추가 */
  box-sizing: border-box; /* 패딩 포함 계산 */
  align-items: center; /* 콘텐츠를 가운데 정렬 */

  @media (max-width: 768px) {
    width: 100vw; /* 모바일 화면에서 전체 너비 */
    padding: 10px; /* 모바일에서 여백 줄이기 */
    gap: 12px; /* 모바일에서 콘텐츠 간격 확대 */
  }
`;
