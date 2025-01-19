import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  // 모바일 여부를 확인하는 함수
  const isMobile = window.innerWidth <= 768;
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer', // 클릭 가능하도록 설정
    objectFit: 'cover', // 이미지 비율을 정사각형에 맞게 채움
    width: isMobile ? '100px' : '150px', // 모바일: 120px, 데스크톱: 170px
    height: isMobile ? '100px' : '150px', // 정사각형 크기 유지
    margin: 0, // 여백 약간 추가
  };
  
  

  return (
    <Gallery
      options={{
        zoom: true, // 확대 버튼 활성화
        wheelToZoom: true, // 마우스 휠로 확대 가능
        clickToCloseNonZoomable: true, // 줌 불가능한 이미지 클릭 시 닫기
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
              original={image.source} // 클릭 시 표시할 원본 이미지
              thumbnail={image.source} // 작은 이미지
              width={image.width}
              height={image.height}
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles} // 작은 이미지 스타일
                  alt={image.alt}
                  src={image.source}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open} // 클릭하면 원본 이미지로 오픈
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
