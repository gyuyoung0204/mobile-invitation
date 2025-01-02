import styled from '@emotion/styled';

const Container = styled.div`
border: 30px solid transparent; /* 테두리의 초기 값 설정 */
border-image-source: url('/background.png');
border-image-slice: 30% 49%;
border-image-width: 280px;
background-color: #ffffff;
width: 85vw;
margin: 0 auto;
  
  position: relative; /* 그라데이션을 올리기 위해 필요 */
  @media screen and (min-width: 500px) {
      width: 500px;
  }
`;

export default Container;
