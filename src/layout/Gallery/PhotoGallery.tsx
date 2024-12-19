import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '100px',
    height: '150px',
  };

  return (
    <Gallery
      options={{
        zoom: false, // 줌 버튼 비활성화
        maxZoomLevel: 1, // 확대 비율 제한
        pinchToZoom: false, // 핀치 줌 비활성화
        wheelToZoom: false, // 마우스 휠 줌 비활성화
        allowPanToNext: false, // 이미지를 드래그로 이동하지 못하도록 설정
        doubleTapZoom: false, // 더블 탭 줌 비활성화
        imageClickAction: 'close', // 이미지를 클릭하면 닫히도록 설정
      }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', // 1:1 비율로 그리드 구성
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
                  onClick={open}
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
