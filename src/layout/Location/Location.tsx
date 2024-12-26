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
  width: 100vw; /* 화면 너비를 가득 채움 */
  height: 100vh; /* 화면 높이를 가득 채움 */
  max-width: 100%; /* 데스크톱에서 최대 너비 제한 제거 */
  margin: 0 auto; /* 가운데 정렬 */
  display: flex;
  flex-direction: column;
  padding: 20px; /* 내부 여백 추가 */

  @media (max-width: 768px) {
    padding: 10px; /* 모바일 화면에서 패딩 줄이기 */
  }
`;