import { useState } from 'react';
import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <ContentsWrap>
      <ImageMoreWrap isMoreView={isMoreView}>
        {!isMoreView && <WhiteGradientOverlay />}
        <PhotoGallery />
      </ImageMoreWrap>
      {!isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>더보기</PlusButton>
      )}
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  margin: 30px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw; /* 모바일 화면에서 가득 채우기 */
  padding: 0 10px; /* 모바일 화면에서 좌우 여백 추가 */

  @media (min-width: 600px) {
    max-width: 1200px; /* 데스크톱 화면에서는 최대 너비 제한 */
    margin: 30px auto;
  }
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  width: 100%; /* 갤러리가 화면 가득 차도록 */
  max-height: ${(props) => (props.isMoreView ? '' : '60vh')};
  overflow: hidden;

  @media (min-width: 600px) {
    max-width: 1000px; /* 데스크톱 화면에서 너비 제한 */
  }
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
`;

const PlusButton = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 6px 12px;
  font-size: 1rem;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
  text-align: center;

  @media (min-width: 600px) {
    max-width: 300px; /* 데스크톱 화면에서 버튼 너비 제한 */
  }
`;
