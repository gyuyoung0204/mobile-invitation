import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  // 모바일 여부를 확인하는 함수
  const isMobile = window.innerWidth <= 768;

  // 스타일 설정
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer', // 클릭 가능하도록 설정
    objectFit: 'cover',
    width: isMobile ? '110px' : '150px', // 모바일: 120px, 데스크톱: 170px
    height: isMobile ? '110px' : '150px', // 정사각형 크기 유지
  };

  return (
    <Gallery
      options={{
        zoom: false, // 확대 버튼 비활성화
        maxZoomLevel: 1, // 최대 확대 비율 제한
        wheelToZoom: false, // 마우스 휠 확대 비활성화
        clickToCloseNonZoomable: true, // 줌 불가능한 이미지 클릭 시 닫기
      }}
      onBeforeOpen={(pswpInstance) => {
        pswpInstance.on('uiRegister', () => {
          pswpInstance.options.maxZoomLevel = 1; // 줌 비율 제한
        });

        pswpInstance.zoomTo = () => {}; // 줌 메서드를 비활성화
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 3, // 갭 간격
        }}
      >
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped={false} // 원본 비율 유지
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={image.alt}
                  src={image.source}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open} // 클릭하면 오픈되도록 유지
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
