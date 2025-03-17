import { useState } from 'react';
import PhotoGallery from './PhotoGallery.tsx'; // ✅ 기존 PhotoGallery 유지
import './Gallery.css';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <div className="contents-wrap">
      <div className={`image-more-wrap ${isMoreView ? 'is-more-view' : ''}`}>
        {!isMoreView && <div className="white-gradient-overlay" />}
        <PhotoGallery isMoreView={isMoreView} />
      </div>
      {!isMoreView && (
        <div className="plus-button" onClick={onClickImageMoreViewButton}>
          더보기
        </div>
      )}
    </div>
  );
};

export default GalleryWrap;
