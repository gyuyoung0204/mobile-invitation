import { useState } from 'react';
import PhotoGallery from './PhotoGallery.tsx';
import './Gallery.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

// AOS 초기화
AOS.init({
  duration: 1500, // 애니메이션 지속 시간
  offset: 100,    // 애니메이션 시작 위치
  easing: 'ease-in-out', // 부드러운 애니메이션
  once: true,     // 한 번만 실행
});
const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };

  return (
    <div className="contents-wrap" data-aos="fade-up" data-aos-delay="0">
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
