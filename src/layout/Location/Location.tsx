import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <Map />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 100%; /* 기본 너비 */
  max-width: 1400px; /* 데스크톱에서 최대 너비 제한 */
  margin: 0 auto; /* 가운데 정렬 */
  display: flex;
  flex-direction: column;
  padding: 0; /* 기본 내부 여백 */

  @media (max-width: 768px) {
    width: 100vw; /* 모바일에서 화면 너비를 가득 채움 */
    height: 100vh; /* 모바일에서 화면 높이를 가득 채움 */
    max-width: 100%; /* 모바일에서는 너비 제한 해제 */
    padding: 10px; /* 모바일에서 여백 추가 */
    box-sizing: border-box; /* 패딩 포함 계산 */
    overflow: hidden; /* 불필요한 스크롤 방지 */
  }
`;
