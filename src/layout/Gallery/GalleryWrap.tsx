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

  @media (max-width: 600px) {
    margin: 10px 0; /* 모바일에서 마진 줄이기 */
    width: 100%; /* 화면 가득 채우기 */
  }
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  max-height: ${(props) =>
    props.isMoreView ? 'auto' : '60vh'}; /* isMoreView 상태에 따라 높이 조정 */
  overflow: hidden;
  width: 100%; /* 기본적으로 너비 100% */

  @media (max-width: 600px) {
    max-height: ${(props) =>
      props.isMoreView ? 'auto' : '40vh'}; /* 모바일에서 높이 더 줄이기 */
    width: 100vw; /* 모바일 화면에 가득 채우기 */
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

  @media (max-width: 600px) {
    height: 50%; /* 모바일에서 그라데이션 범위 줄이기 */
  }
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

  @media (max-width: 600px) {
    font-size: 0.9rem; /* 모바일에서 버튼 텍스트 크기 줄이기 */
    padding: 8px; /* 버튼 높이 더 줄이기 */
  }
`;
