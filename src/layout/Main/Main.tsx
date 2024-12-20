import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/03.jpg';

const Main = () => {
  const { greeting } = data;
  return (
    <Wrapper>
      <MainImgWrapper>
        <MainImg src={mainImg} />
        <FadeOutGradient />
      </MainImgWrapper>
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainImgWrapper = styled.div`
  position: relative;
  width: 127.2%; /* 기본값 */
  height: 100%;
  border-radius: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%; /* 모바일에서는 부모 컨테이너에 가득 채움 */
    height: auto; /* 높이는 이미지 비율에 따라 조정 */
  }
`;

const MainImg = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto; /* 모바일에서는 이미지가 비율대로 보이도록 조정 */
  }
`;

const FadeOutGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%; /* 그라데이션 높이 */
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  pointer-events: none; /* 그라데이션이 클릭되지 않도록 설정 */
`;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
  margin-top: 20px;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
