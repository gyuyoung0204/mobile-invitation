import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/main.jpg';
// import flowerImg from '@/assets/\icons/flower_image.png'; // flower.png 파일 import
import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS 초기화
AOS.init({
  duration: 1500, // 애니메이션 지속 시간 (ms)
  offset: 100,    // 애니메이션 시작 위치 (px)
  easing: 'ease-in-out', // 부드러운 애니메이션
  once: true,     // 애니메이션 한 번만 실행
});

const Main = () => {
  const { greeting } = data;
  return (
    <Wrapper>
      <MainImgWrapper data-aos="fade-up" data-aos-delay="0"> {/* 즉시 실행 */}
        <MainImg src={mainImg} />
        <FadeOutGradient />
      </MainImgWrapper>
      {/* flower.png 이미지 추가 */}
    {/*  <FlowerImg src={flowerImg} alt="Flower" data-aos="fade-up" data-aos-delay="200" /> */}
      <MainTitle data-aos="fade-up" data-aos-delay="300">
        {greeting.title.split("그리고")[0]}
        <SmallWord>그리고</SmallWord>
        {greeting.title.split("그리고")[1]}
      </MainTitle>
      <SubTitle data-aos="fade-up" data-aos-delay="600"> {/* 600ms 지연 */}
        {greeting.eventDetail}
      </SubTitle>
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
  width: 127.2%;
  height: 100%;
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 20px; /* 현재 공백 제거 */

  @media (max-width: 768px) {
    width: 100vw;
    height: 100%;
  }
`;

const SmallWord = styled.span`
  font-size: 0.8rem; /* 원하는 크기로 조정 */
  color: #777; /* 색상도 변경 가능 */
  font-weight: bold; /* 텍스트를 볼드 처리 */
  
`;
const MainImg = styled.img`
  width: 100%;
  display: block;
  object-fit: contain; /* 원본 비율 유지 */

  @media (max-width: 768px) {
    width: 100%;
    height: auto; /* 비율 유지 */
    object-fit: contain; /* 원본 비율 유지 */
    margin-bottom: 0px; /* 현재 공백 제거 */
  }
`;

const FadeOutGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  pointer-events: none;

  @media (max-width: 768px) {
    height: 40%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    pointer-events: none;
  }
`;

// const FlowerImg = styled.img`
//   width: 100px; /* 원하는 크기로 설정 */
//   height: auto;
//   margin-bottom: 10px;

//   @media (max-width: 768px) {
//     width: 80px; /* 작은 화면에서 크기 조정 */
//   }
// `;

const MainTitle = styled.p`
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  font-weight: bold;
  white-space: pre-line;
  margin-top: 20px;
`;

const SubTitle = styled.p`
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #2F2120;
  font-weight: bold;
  line-height: 140%;
  white-space: pre-line;
  margin-top: 0px;
`;
