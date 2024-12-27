import styled from '@emotion/styled';

const Container = styled.div`
  border: 30px solid transparent; /* 테두리의 초기 값 설정 */
  border-image-source: url('/background.png'); /* 이미지 경로 설정 */
  border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  border-image-width: 280px; /* 테두리 이미지의 너비 설정 */
  background-color: #ffffff;
  width: 100%; /* 기본적으로 화면 너비를 가득 채움 */
  height: 100%; /* 화면 높이를 가득 채움 */
  margin: 0 auto; /* 가운데 정렬 */
  box-sizing: border-box; /* 패딩 포함 크기 계산 */
  position: relative; /* 그라데이션을 올리기 위해 필요 */

  @media screen and (min-width: 500px) {
    width: 85vw; /* 데스크톱에서 적절한 너비 설정 */
    max-width: 500px; /* 데스크톱 최대 너비 */
  }

  @media screen and (max-width: 768px) {
    width: 100vw; /* 모바일에서 화면 너비를 가득 채움 */
    height: 100vh; /* 모바일에서 화면 높이를 가득 채움 */
    margin: 0; /* 여백 제거 */
  }
`;

export default Container;
