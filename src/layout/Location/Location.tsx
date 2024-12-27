import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <MapContainer>
        <Map />
      </MapContainer>
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%; /* 화면 너비 가득 채우기 */
  max-width: 1200px; /* 데스크톱 화면에서 최대 너비 제한 */
  margin: 0 auto; /* 가운데 정렬 */
  display: flex;
  flex-direction: column;
  padding: 0; /* 내부 여백 제거 */
  box-sizing: border-box; /* 패딩 포함 계산 */
  overflow: hidden; /* 불필요한 스크롤 방지 */

  @media (max-width: 1200px) {
    width: 100vw; /* 모바일에서 화면 너비를 뷰포트에 맞춤 */
    height: 100vh; /* 모바일에서 화면 높이도 뷰포트에 맞춤 */
    max-width: 100%; /* 모바일에서는 너비 제한 해제 */
    padding: 10px; /* 모바일에서 여백 추가 */
    overflow-y: auto; /* 세로 스크롤 가능 */
  }
`;

const MapContainer = styled.div`
  width: 100%; /* 지도 컨테이너 너비를 화면 가득 채우기 */
  height: 60%; /* 데스크톱 비율에 맞게 지도 높이 설정 */
  margin: 10px 0; /* 지도와 다른 콘텐츠 간격 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* 로딩 시 배경색 */

  @media (max-width: 768px) {
    height: 50vh; /* 모바일에서 지도 높이 조정 */
  }
`;
