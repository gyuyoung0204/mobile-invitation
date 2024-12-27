import { useState } from 'react';
import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';
import './Gallery.css';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <div className="location-container">
      <ImageMoreWrap isMoreView={isMoreView}>
        {!isMoreView && <WhiteGradientOverlay />}
        <PhotoGallery />
      </ImageMoreWrap>
      {!isMoreView && (
        <PlusButton onClick={onClickImageMoreViewButton}>더보기</PlusButton>
      )}
      </div>
  );
};

export default GalleryWrap;
const ContentsWrap = styled.div`
  margin: 0; /* 상하 여백 완전히 제거 */
  padding: 0; /* 내부 여백 제거 */
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* 전체 화면 너비에 맞춤 */
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  width: 100%; /* 갤러리 너비를 화면에 맞춤 */
  max-height: ${(props) =>
    props.isMoreView ? '100%' : '60vh'}; /* 더보기 클릭 시 전체 높이 사용 */
  overflow: hidden;
  margin: 0; /* 상하 여백 완전히 제거 */
  padding: 0; /* 내부 여백 제거 */

  @media (max-width: 768px) {
    max-height: ${(props) =>
      props.isMoreView ? '100%' : '60vh'}; /* 모바일에서 높이를 더 늘림 */
    margin: 0; /* 모바일에서도 공백 제거 */
  }
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%; /* 하단 부분만 그라데이션 효과 */
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 100%
  );
`;

const PlusButton = styled.div`
  width: 100%;
  max-width: 200px; /* 버튼 최대 너비 제한 */
  box-sizing: border-box;
  padding: 10px 16px;
  font-size: 1rem;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  cursor: pointer;
  background: #fff;
  margin-top: 20px; /* 더보기 버튼을 약간 아래로 이동 */

  @media (max-width: 768px) {
    font-size: 0.9rem; /* 모바일에서 버튼 글자 크기 조정 */
    padding: 8px 12px; /* 버튼 여백 축소 */
    margin-top: 15px; /* 모바일에서 버튼 위치 조정 */
  }
`;