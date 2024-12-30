import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  // 모바일 여부를 확인하는 함수
  const isMobile = window.innerWidth <= 768;

  // 스타일 설정
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer', // 클릭 가능하도록 설정
    objectFit: 'contain',
    width: isMobile ? '150px' : '200px', // 모바일에서 크기를 줄임
    height: isMobile ? '225px' : '300px', // 모바일에서 크기를 줄임
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
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridGap: 2,
        }}
      >
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped
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
