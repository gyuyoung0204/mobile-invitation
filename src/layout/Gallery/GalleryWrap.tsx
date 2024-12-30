import { useState } from 'react';
import PhotoGallery from './PhotoGallery.tsx';
import './Gallery.css';

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <div className="gallery-container">
      <div className={`image-more-wrap ${isMoreView ? 'is-more-view' : ''}`}>
        <PhotoGallery />
      </div>
      {!isMoreView && (
        <button className="plus-button" onClick={onClickImageMoreViewButton}>
          더보기
        </button>
      )}
    </div>
  );
};

export default GalleryWrap;
