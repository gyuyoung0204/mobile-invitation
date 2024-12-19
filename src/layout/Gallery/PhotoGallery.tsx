import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer', // 클릭 가능하도록 설정
    objectFit: 'contain',
    width: '100px',
    height: '150px',
  };

  return (
    <Gallery
      options={{
        zoom: false, // 확대 버튼 비활성화
        maxZoomLevel: 1, // 최대 확대 비율을 원래 크기로 제한
        wheelToZoom: false, // 마우스 휠 확대 비활성화
      }}
      onBeforeOpen={(pswpInstance) => {
        // 줌 동작 비활성화
        pswpInstance.on('afterInit', () => {
          pswpInstance.currZoomLevel = 1; // 초기 줌 레벨 고정
          pswpInstance.zoomTo = () => {}; // 줌 기능 비활성화
        });

        // 핀치 줌 비활성화
        pswpInstance.on('pointerDown', (e) => {
          if (e.pointerType === 'touch') {
            e.preventDefault(); // 터치 제스처 무효화
          }
        });
      }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 2,
        }}>
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}>
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
