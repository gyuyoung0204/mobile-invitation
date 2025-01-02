import styled from '@emotion/styled';

const Container = styled.div`
border-top: none; /* 위쪽 테두리는 제거 */
border-left: 30px solid transparent; 
border-right: 30px solid transparent;
border-bottom: 30px solid transparent;

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
