import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';
import './Gallery.css';

const PhotoGallery = () => {
  return (
    <Gallery
      options={{
        zoom: false, // 확대 버튼 비활성화
        maxZoomLevel: 1, // 최대 확대 비율 제한
        wheelToZoom: false, // 마우스 휠 확대 비활성화
        clickToCloseNonZoomable: true, // 줌 불가능한 이미지 클릭 시 닫기
      }}
    >
      <div className="gallery-grid">
        {images.map((image, index) => (
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
                className="gallery-item"
                alt={image.alt}
                src={image.source}
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open} // 클릭하면 오픈되도록 유지
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
