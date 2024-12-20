import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/01.jpg';

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
  width: 127%; /* 부모 컨테이너의 너비를 가득 채움 */
  height: 100%; /* 부모 컨테이너의 높이를 가득 채움 */
  border-radius: 0; /* 둥근 모서리 제거 */
  overflow: hidden; /* 넘치는 콘텐츠 숨김 */
`;


const MainImg = styled.img`
  width: 100%;
  display: block;
  object-fit: cover; /* 이미지 크기를 컨테이너에 맞춤 */
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
