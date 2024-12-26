import styled from '@emotion/styled';

const Container = styled.div`
  border: 40px solid transparent; /* 테두리의 초기 값 설정 */
  border-image-source: url('/background.png'); /* 이미지 경로 설정 */
  border-image-slice: 30% 49%; /* 이미지의 크기 설정 */
  border-image-width: 300px; /* 테두리 이미지의 너비 설정 */
  background-color: #ffffff;
  width: 100vw; /* 모바일에서 가득 채우기 */
  margin: 0 auto;

  @media screen and (min-width: 500px) {
      width: 500px; /* 데스크톱에서 최대 너비 설정 */
  }
`;

export default Container;
