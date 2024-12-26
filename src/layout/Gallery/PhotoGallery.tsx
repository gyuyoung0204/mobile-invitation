import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer', // 클릭 가능하도록 설정
    objectFit: 'cover', // 이미지를 비율에 맞게 조정
    width: '100%', // 부모 컨테이너에 맞게 채움
    height: '100%', // 부모 컨테이너 비율 유지
    borderRadius: '5px', // 선택적으로 둥근 모서리 추가
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
        // 줌 동작 비활성화
        pswpInstance.on('uiRegister', () => {
          pswpInstance.options.maxZoomLevel = 1; // 줌 비율 제한
        });

        // 줌 메서드 오버라이드
        pswpInstance.zoomTo = () => {}; // 줌 메서드를 비활성화
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', // 자동 열 배치
          gap: '10px',
          padding: '10px',
          width: '100%', // 화면에 맞게 채움
          boxSizing: 'border-box',
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
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '3 / 4', // 3:4 비율 유지
                  overflow: 'hidden', // 초과 내용 숨김
                }}
                onClick={open}
              >
                <img
                  style={smallItemStyles}
                  alt={image.alt}
                  src={image.source}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                />
              </div>
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
