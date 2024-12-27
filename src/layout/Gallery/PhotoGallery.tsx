import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer', // 클릭 가능하도록 설정
    objectFit: 'cover', // 이미지를 박스에 맞게 자르되 비율 유지
    width: '100%', // 이미지가 셀의 너비를 가득 채우도록 설정
    height: '100%', // 이미지가 셀의 높이를 가득 채우도록 설정
    borderRadius: '5px', // 모서리를 약간 둥글게 설정
  };

  const gridContainerStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', // 최소 120px, 셀이 자동으로 크기를 조정
    gap: '5px', // 셀 간격 설정
    width: '100%', // 전체 너비를 가득 채우기
    margin: '0 auto', // 중앙 정렬
    padding: '0', // 상하 좌우 여백 제거
    boxSizing: 'border-box', // 패딩 포함 크기 계산
  };

  const gridItemStyles: React.CSSProperties = {
    width: '100%', // 셀 너비
    position: 'relative', // 내부 요소 배치용
    overflow: 'hidden', // 이미지가 셀을 넘지 않도록 설정
    margin: '0', // 상하 여백 제거
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
      <div style={gridContainerStyles}>
        {images.map((image, index) => (
          <div key={index} style={gridItemStyles}>
            <Item
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
          </div>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
