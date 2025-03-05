import data from 'data.json';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const Map_Sub = () => {
  const { lat, lon } = data.mapInfo_sub;
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: '100%',
        height: '300px',
      }}
    >
      <NaverMap
        defaultCenter={new navermaps.LatLng(lat, lon)}
        defaultZoom={17}
        draggable={true} // 드래그 비활성화
        pinchZoom={true} // 핀치 줌 비활성화
        scrollWheel={true} // 스크롤 줌 비활성화
        keyboardShortcuts={false} // 키보드 단축키 비활성화
      >
        <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map_Sub;
