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
        zoom: false, // 줌 비활성화
        maxZoomLevel: 1, // 최대 확대 비율 1로 제한
        wheelToZoom: false, // 마우스 휠 확대/축소 비활성화
        pinchToClose: false, // 핀치 제스처로 닫기 비활성화
        closeOnVerticalDrag: true, // 세로 드래그로 닫기 활성화
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
