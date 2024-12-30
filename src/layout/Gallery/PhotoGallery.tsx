import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover', // 이미지 비율 유지
    width: '100%',
    height: 'auto',
  };

  return (
    <Gallery
      options={{
        zoom: false, // 확대 버튼 비활성화
        maxZoomLevel: 1, // 최대 확대 비율 제한
        wheelToZoom: false, // 마우스 휠 확대 비활성화
        clickToCloseNonZoomable: true, // 줌 불가능한 이미지 클릭 시 닫기
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)', // 2개씩 이미지 표시
          gridGap: '10px',
        }}
      >
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
                style={smallItemStyles}
                alt={image.alt}
                src={image.source}
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open} // 클릭하면 확대
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
