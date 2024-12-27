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
    <div className="contents-wrap">
      <div className={`image-more-wrap ${isMoreView ? 'is-more-view' : ''}`}>
        {!isMoreView && <div className="white-gradient-overlay" />}
        <PhotoGallery />
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
