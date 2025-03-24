import styled from '@emotion/styled';
import AttendanceForm from './AttendacneForm';

const AttendanceList = ({ onClose }: { onClose: () => void }) => {
  return (
    <Overlay>
      <ModalBox>
        <Header>
          <Title>참석 정보 입력</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>
        <AttendanceForm onSubmit={onClose} />
      </ModalBox>
    </Overlay>
  );
};

export default AttendanceList;

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 24px 20px;
  border-radius: 16px;
  width: 90%;
  max-width: 360px; /* ⬅ 작게 */
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15); /* 그림자 효과 */
  position: relative;
  animation: pop 0.25s ease-in-out;

  @keyframes pop {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
