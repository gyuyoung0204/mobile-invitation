import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg';

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
    width: 100vw; /* 모바일에서 너비는 뷰포트 가득 */
    height: 100vh; /* 높이도 뷰포트 가득 */
  }
`;

const MainImg = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 100%; /* 모바일에서 이미지 높이도 가득 */
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

  /* 모바일에서 그라데이션 수정 */
  @media (max-width: 768px) {
    height: 40%; /* 모바일에서 높이를 더 키움 */
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    pointer-events: none; /* 그라데이션이 클릭되지 않도록 설정 */
  }
`;

const MainTitle = styled.p`
  font-family: 'Times New Roman', serif; /* 클래식 폰트 적용 */
  font-size: 2rem;
  color: #2F2120; /* 기존 색상 유지 */
  line-height: 120%;
  font-weight: bold; /* 텍스트를 굵게 강조 */
  white-space: pre-line;
  margin-top: 20px;
`;

const SubTitle = styled.p`
  font-family: 'Times New Roman', serif; /* 동일한 폰트 */
  font-size: 1.1rem;
  color: #2F2120; /* 기존 색상 유지 */
  font-weight: bold; /* 텍스트를 굵게 강조 */
  line-height: 140%;
  white-space: pre-line;
`;
