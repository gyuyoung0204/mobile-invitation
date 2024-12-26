import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/05.jpg';

const Main = () => {
  const { greeting } = data;
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <MainImgWrapper>
          <MainImg src={mainImg} />
          <FadeOutGradient />
        </MainImgWrapper>
        <MainTitle>{greeting.title}</MainTitle>
        <SubTitle>{greeting.eventDetail}</SubTitle>
      </Wrapper>
    </>
  );
};

export default Main;

const GlobalStyle = styled.div`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden; /* 스크롤 방지 (선택 사항) */
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh; /* 화면 가득 채움 */
  position: relative; /* 부모 요소로서 MainImgWrapper를 포함 */
`;

const MainImgWrapper = styled.div`
  position: absolute; /* 화면 최상단에 고정 */
  top: 0;
  left: 0;
  width: 100vw; /* 화면 너비 가득 */
  height: 100vh; /* 화면 높이 가득 */
  overflow: hidden;
  z-index: -1; /* 뒤로 배치하여 제목과 겹치지 않도록 */
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율 유지하며 화면 가득 채움 */
  display: block;
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
  z-index: 1; /* 텍스트가 이미지 위로 오도록 */
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
  z-index: 1; /* 텍스트가 이미지 위로 오도록 */
`;
