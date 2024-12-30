import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';
import './Gallery.css';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover', // 비율 유지하면서 가득 채우기
    width: '100%',
    height: '100%',
  };

  return (
    <Gallery
      options={{
        zoom: false, // 확대 비활성화
        maxZoomLevel: 1, // 확대 비율 제한
        wheelToZoom: false, // 마우스 휠 확대 비활성화
        clickToCloseNonZoomable: true, // 줌 불가능한 이미지 클릭 시 닫기
      }}>
      <div className="gallery-grid">
        {images.map((image, index) => (
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
                onClick={open} // 클릭하면 오픈
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
